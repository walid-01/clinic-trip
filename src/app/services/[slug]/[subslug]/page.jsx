import Image from "next/image";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import ContactFormSide from "@/components/ContactFormSide";
import ServiceFAQ from "@/components/ServiceFAQ";

const Service = async ({ params }) => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const { slug, subslug } = params;

  const res = await client.getEntries({
    content_type: "serviceGroup",
    "fields.slug": slug,
    limit: 1,
  });

  const serviceGroup = res.items.length > 0 ? res.items[0] : null;

  if (!serviceGroup) {
    return <div>Service group not found</div>;
  }

  const services = serviceGroup.fields.services || [];
  const service = services.find((s) => s.fields.slug === subslug);

  if (!service) {
    return <div>Service not found in this group</div>;
  }

  // Extract FAQ references and fetch full entries
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

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl font-semibold my-4">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-xl font-medium my-3">{children}</h3>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="text-gray-700 my-2">{children}</p>
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
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-10 w-full lg:flex lg:justify-center lg:gap-40">
        <div className="mt-6 w-2/5">
          <h1 className="text-3xl font-bold">{service.fields.name}</h1>
          <div className="text-gray-700 mt-4">
            {service.fields.content
              ? documentToReactComponents(service.fields.content, options)
              : ""}
          </div>
        </div>
        <div className="w-1/4">
          <ContactFormSide />
        </div>
      </div>

      {/* Pass the fully fetched FAQ data to the FAQ component */}
      <div className="mt-10">
        <ServiceFAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default Service;
