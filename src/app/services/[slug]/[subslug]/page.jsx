import Image from "next/image";
import { createClient } from "contentful";

const Service = async ({ params }) => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const { slug, subslug } = params;

  // Fetch the service group based on `slug`
  const res = await client.getEntries({
    content_type: "serviceGroup",
    "fields.slug": slug,
    limit: 1,
  });

  const serviceGroup = res.items.length > 0 ? res.items[0] : null;

  if (!serviceGroup) {
    return <div>Service group not found</div>; // 404 if `slug` is invalid
  }

  // Find the specific service within the group using `subslug`
  const services = serviceGroup.fields.services || [];
  const service = services.find((s) => s.fields.slug === subslug);

  if (!service) {
    return <div>Service not found in this group</div>; // 404 if `subslug` is invalid within the group
  }

  // Render the service details
  return (
    <div className="p-10">
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

      <div className="mt-6">
        <h1 className="text-3xl font-bold">{service.fields.name}</h1>
        <p className="text-gray-700 mt-4">{service.fields.description || ""}</p>
      </div>
    </div>
  );
};

export default Service;
