import { notFound } from "next/navigation";

const DynamicService = async ({ params }) => {
  const { slug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/services/${slug}`
  );

  if (!res.ok) return notFound();

  const { data } = await res.json();
  // console.log(data);

  return <div>{data.serviceName}</div>;
};

export default DynamicService;
