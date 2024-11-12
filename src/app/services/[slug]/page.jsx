import Link from "next/link";
import Image from "next/image";
import { createClient } from "contentful";
import { notFound } from "next/navigation";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

// Helper function to ensure absolute URL for images
function ensureAbsoluteUrl(url) {
  if (url && !url.startsWith("http")) {
    return `https:${url}`;
  }
  return url;
}

async function fetchServiceGroupData(slug) {
  const res = await client.getEntries({
    content_type: "serviceGroup",
    "fields.slug": slug,
    limit: 1,
  });

  return res.items.length > 0 ? res.items[0] : null;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const serviceGroup = await fetchServiceGroupData(slug);

  if (serviceGroup) {
    return {
      title: serviceGroup.fields.groupName,
      description: serviceGroup.fields.description,
    };
  }

  return { title: "Service Group Not Found", description: "Service not found" };
}

const ServiceGroup = async ({ params }) => {
  const { slug } = params;
  const serviceGroup = await fetchServiceGroupData(slug);

  if (!serviceGroup) {
    return notFound();
  }

  const services = serviceGroup.fields.services || [];

  return (
    <div>
      <div className="relative">
        <Image
          src={
            ensureAbsoluteUrl(
              serviceGroup.fields.coverImage?.fields.file.url
            ) || "/assets/default_service_thumbnail.webp"
          }
          alt={serviceGroup.fields.groupName}
          width={2000}
          height={2000}
          className="object-cover w-full h-[80vh] brightness-[80%]"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-7xl font-bold">
            {serviceGroup.fields.groupName}
          </h1>
          <p className="text-3xl">{serviceGroup.fields.description}</p>
        </div>
      </div>

      <div className="py-14 px-14">
        <h1 className="text-center text-3xl font-bold mb-14">
          Our {serviceGroup.fields.groupName} Services
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:w-3/5 xl:mx-auto">
          {services.map((service) => (
            <div
              key={service.sys.id}
              className="relative border shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <Link
                href={`/services/${serviceGroup.fields.slug}/${service.fields.slug}`}
              >
                <Image
                  src={
                    ensureAbsoluteUrl(service.fields.image?.fields.file.url) ||
                    "/assets/default_service_thumbnail.webp"
                  }
                  alt={service.fields.name}
                  width={350}
                  height={400}
                  className="w-full h-[400px] object-cover brightness-90"
                />

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 bg-gradient-to-t from-black via-transparent">
                  <p className="text-sm text-gray-800 tracking-wide bg-gray-200 px-2 rounded-full w-fit mb-1">
                    {serviceGroup.fields.groupName}
                  </p>
                  <h2 className="text-2xl font-semibold text-white">
                    {service.fields.name}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGroup;
