import { createClient } from "contentful";
import Link from "next/link";

const OurTreatments = async () => {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "serviceGroup",
  });

  const serviceGroups = res.items;
  return (
    <div
      className="py-14 px-10 md:px-32 bg-accent/5"
      // style={{
      //   background: "linear-gradient(to bottom right, #ede9fd, #f5f3ff)",
      // }}
    >
      <h1 className="w-full text-center text-3xl font-bold mb-14">
        Our Treatments
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {serviceGroups.map((group) => (
          <div className="relative flex flex-col group" key={group.sys.id}>
            <div className="relative h-0 pb-[55%] overflow-hidden">
              {/* Image with zoom effect on hover */}
              <img
                src={group.fields.thumbnail.fields.file.url}
                className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                alt="service"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end bg-black/10 gap-4 p-4">
              <h2 className="text-2xl font-bold text-white">
                {group.fields.groupName}
              </h2>
              <p className="text-white w-2/3 text-center">
                {group.fields.description}
              </p>
              <div className="flex gap-4 flex-row">
                <Link
                  className="btn btn-secondary rounded-none"
                  href={`/services/${group.fields.slug}`}
                >
                  Learn More
                </Link>
                <Link href="/consultation" className="btn rounded-none">
                  Consultation
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTreatments;
