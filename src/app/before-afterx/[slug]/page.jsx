// import Link from "next/link";
// import Image from "next/image";
// import { createClient } from "contentful";
// import { notFound } from "next/navigation";

// const ServiceGroup = async ({ params }) => {
//   const client = createClient({
//     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
//   });

//   const { slug } = params;

//   const res = await client.getEntries({
//     content_type: "serviceGroup",
//     "fields.slug": slug,
//     limit: 1,
//   });

//   // Check if the entry was found
//   const serviceGroup = res.items.length > 0 ? res.items[0] : null;

//   if (!serviceGroup) {
//     return notFound();
//   }

//   const services = serviceGroup.fields.services || []; // Assuming services is an array

//   return (
//     <div>
//       {/* <div className="relative w-full h-[400px]">
//         <div
//           className="bg-cover bg-center h-full w-full"
//           style={{
//             backgroundImage: `url(${serviceGroup.fields.coverImage?.fields.file.url})`,
//           }}
//           aria-label={serviceGroup.fields.groupName} // Accessibility improvement
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-10 p-4 rounded">
//           <h1 className="text-xl font-bold">{serviceGroup.fields.groupName}</h1>
//           <p className="text-center">{serviceGroup.fields.description}</p>
//         </div>
//       </div> */}
//       <div className="relative">
//         <img
//           className="object-cover w-full h-[80vh] brightness-[80%]"
//           src={serviceGroup.fields.coverImage?.fields.file.url}
//           alt={serviceGroup.fields.groupName}
//         />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//           <h1 className="text-7xl text-white font-bold">
//             {serviceGroup.fields.groupName}
//           </h1>
//           <h1 className="text-3xl text-white">
//             {serviceGroup.fields.description}
//           </h1>
//         </div>
//       </div>

//       <div className="py-14 px-14">
//         <h1 className="text-center text-3xl font-bold mb-14">
//           Our {serviceGroup.fields.groupName} Services
//         </h1>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:w-3/5 xl:mx-auto">
//           {services.map((service) => (
//             <div
//               key={service.sys.id}
//               className="relative border shadow-lg transition-transform transform hover:-translate-y-2"
//             >
//               <Link
//                 className="h-full w-full"
//                 href={`/services/${serviceGroup.fields.slug}/${service.fields.slug}`}
//               >
//                 <Image
//                   src={
//                     service.fields.image?.fields.file.url ||
//                     "/assets/default_service_thumbnail.webp"
//                   } // Use a default image if unavailable
//                   alt={service.fields.name}
//                   width={350}
//                   height={600}
//                   className="w-full h-[400px] object-cover brightness-90"
//                 />

//                 <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end  p-4">
//                   <p className="text-sm text-gray-800 tracking-wide bg-gray-200 px-2 rounded-full w-fit mb-1">
//                     {serviceGroup.fields.groupName}
//                   </p>
//                   <h2 className="text-2xl font-semibold ">
//                     {service.fields.name}
//                   </h2>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceGroup;
