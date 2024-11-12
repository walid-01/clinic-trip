import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import ContactFormSide from "@/components/ContactFormSide";
import ServiceFAQ from "@/components/ServiceFAQ";
import Stages from "@/components/Stages";
import BeforeAfter from "@/components/BeforeAfter";
import { notFound } from "next/navigation";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

// Fetching contentful data only once to use in both metadata and component
async function fetchServiceData(slug, subslug) {
  const res = await client.getEntries({
    content_type: "serviceGroup",
    "fields.slug": slug,
    limit: 1,
  });

  const serviceGroup = res.items.length > 0 ? res.items[0] : null;
  if (!serviceGroup) return null;

  const services = serviceGroup.fields.services || [];
  const service = services.find((s) => s.fields.slug === subslug);
  if (!service) return null;

  // Fetch additional data like FAQ entries and images
  const faqReferences = service.fields.faq || [];
  const faqs = await Promise.all(
    faqReferences.map(async (faqRef) => {
      const faqEntry = await client.getEntry(faqRef.sys.id);
      return {
        question: faqEntry.fields.question,
        answer: faqEntry.fields.answer,
      };
    })
  );

  const beforeAfterReferences =
    service.fields.category?.fields.beforeAfter || [];
  const beforeAfterImages = await Promise.all(
    beforeAfterReferences.map(async (imageRef) => {
      const imageEntry = await client.getAsset(imageRef.sys.id);
      return imageEntry.fields.file.url;
    })
  );

  return { service, faqs, beforeAfterImages };
}

// `generateMetadata` uses the fetched data directly to avoid duplicate requests
export async function generateMetadata({ params }) {
  const { slug, subslug } = params;
  const data = await fetchServiceData(slug, subslug);

  if (data?.service) {
    return {
      title: data.service.fields.name,
      name: data.service.fields.name,
    };
  }

  return { title: "Service Not Found", name: "Service Not Found" };
}

const Service = async ({ params }) => {
  const { slug, subslug } = params;
  const data = await fetchServiceData(slug, subslug);

  if (!data?.service) {
    return notFound();
  }

  const { service, faqs, beforeAfterImages } = data;

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl font-semibold my-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-xl font-medium my-3">{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-gray-900 my-4 text-lg">{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="ml-6">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="list-decimal list-inside ml-6">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="my-1">{children}</li>
      ),
    },
  };

  return (
    <div>
      <div className="relative w-full h-[400px]">
        <Image
          src={
            service.fields.image?.fields.file.url ||
            "/assets/default_service_thumbnail.webp"
          }
          alt={service.fields.name}
          width={800}
          height={400}
          className="w-full h-full object-cover brightness-90"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white p-2">
            {service.fields.name}
          </h1>
        </div>
      </div>

      <div className="py-10 px-10 sm:px-20 lg:px-10 w-full lg:flex lg:justify-center lg:gap-16 xl:gap-30 2xl:gap-40">
        <div className="mt-6 lg:w-1/2 xl:w-2/5">
          <h2 className="text-4xl font-semibold mb-6">
            {service.fields.description}
          </h2>
          <div className="text-gray-700 mt-4">
            {service.fields.content
              ? documentToReactComponents(service.fields.content, options)
              : ""}
          </div>
        </div>
        <div className="sm:w-2/3 mx-auto md:w-2/5 lg:mx-0 lg:w-1/3 2xl:w-1/4">
          <ContactFormSide />
        </div>
      </div>

      <Stages serviceGroup={service.fields.name} />
      <BeforeAfter images={beforeAfterImages} />
      <ServiceFAQ faqs={faqs} />
    </div>
  );
};

export default Service;
