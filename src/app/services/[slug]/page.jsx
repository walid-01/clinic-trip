import Link from "next/link";
import Image from "next/image";
import { createClient } from "contentful";
import { notFound } from "next/navigation";

const ServiceGroup = async ({ params }) => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const { slug } = params;

  const res = await client.getEntries({
    content_type: "serviceGroup",
    "fields.slug": slug,
    limit: 1,
  });

  // Check if the entry was found
  const serviceGroup = res.items.length > 0 ? res.items[0] : null;

  if (!serviceGroup) {
    return notFound();
  }

  const services = serviceGroup.fields.services || []; // Assuming services is an array

  return (
    <div>
      <div className="relative w-full h-[400px]">
        <div
          className="bg-cover bg-center h-full w-full"
          style={{
            backgroundImage: `url(${serviceGroup.fields.coverImage?.fields.file.url})`,
          }}
          aria-label={serviceGroup.fields.groupName} // Accessibility improvement
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-10 p-4 rounded">
          <h1 className="text-xl font-bold">{serviceGroup.fields.groupName}</h1>
          <p className="text-center">{serviceGroup.fields.description}</p>
        </div>
      </div>

      <div>
        <h1 className="text-center text-3xl font-bold mt-8">
          Our {serviceGroup.fields.groupName} Services
        </h1>
        <div className="px-10 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6 xl:w-2/3 xl:mx-auto">
          {services.map((service) => (
            <div
              key={service.sys.id}
              className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2"
            >
              <Link
                className="h-full w-full flex"
                href={`/services/${serviceGroup.fields.slug}/${service.fields.slug}`}
              >
                <Image
                  src={
                    service.fields.image?.fields.file.url ||
                    "/assets/default_service_thumbnail.webp"
                  } // Use a default image if unavailable
                  alt={service.fields.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />

                <div className="bottom-0 left-0 w-full bg-white bg-opacity-50 p-4">
                  <h2 className="text-lg font-bold">{service.fields.name}</h2>
                  <p className="text-sm text-gray-600">
                    {service.fields?.description ||
                      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum distinctio nesciunt error corrupti harum nulla ducimus iusto provident a perspiciatis?"}
                  </p>
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
