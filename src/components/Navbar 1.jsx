// import Link from "next/link";
// import Image from "next/image";
// import logoIcon from "../../public/assets/Logo_2.svg";
// import { createClient } from "contentful";

// const Navbar = async () => {
//   // Fetch service groups and include referenced services in one query
//   const client = createClient({
//     space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
//     accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
//   });

//   const res = await client.getEntries({
//     content_type: "serviceGroup",
//     include: 2, // Include up to 2 levels of linked entries (e.g., services linked via category)
//   });

//   const serviceGroups = res.items;

//   return (
//     <div className="drawer drawer-end z-50">
//       <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-content flex flex-col">
//         {/* Navbar */}
//         <div className="navbar bg-base-100">
//           <div className="navbar-start">
//             <Link href="/" className="w-44 p-2 lg:w-64">
//               <Image priority src={logoIcon} alt="logo" />
//             </Link>
//           </div>

//           <div className="navbar-center hidden xl:flex">
//             <ul className="menu menu-horizontal px-1">
//               {serviceGroups.map((group) => (
//                 <li key={group.sys.id} className="relative group">
//                   {/* Group name */}
//                   <div className="group-name cursor-pointer">
//                     {group.fields.groupName}
//                   </div>

//                   {/* Services list (hidden by default, shown on hover) */}
//                   <ul className="absolute left-0 top-full hidden group-hover:grid bg-white grid-cols-3 gap-x-1 p-4 shadow-lg z-50 w-[80vh] transform -translate-x-1/2">
//                     {group.fields.services.map((service) => (
//                       <li key={service.sys.id}>
//                         <Link
//                           href={`/services/${group.fields.slug}/${
//                             service.fields?.slug || "#"
//                           }`}
//                           className="block p-2"
//                         >
//                           {service.fields?.name || "undefined"}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//               <li>
//                 <Link href={"/about-us"} className="group-name cursor-pointer">
//                   About Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div className="navbar-end">
//             {/* Hamburger menu for small screens */}
//             <div className="flex-none xl:hidden">
//               <label
//                 htmlFor="my-drawer-3"
//                 aria-label="open sidebar"
//                 className="btn btn-square btn-ghost"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   className="inline-block h-6 w-6 stroke-current"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   ></path>
//                 </svg>
//               </label>
//             </div>

//             {/* Free consultation button for large screens */}
//             <div className="flex-none hidden xl:block">
//               <button
//                 type="button"
//                 className="btn btn-secondary rounded-none mr-3"
//               >
//                 Free Consultation
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Page content here */}
//       </div>

//       {/* Sidebar drawer */}
//       <div className="drawer-side">
//         <label
//           htmlFor="my-drawer-3"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu min-h-full w-80 p-4 bg-white">
//           {/* Close button inside the drawer */}
//           <div className="flex justify-end">
//             <li className="drawer-close mb-2">
//               <label
//                 htmlFor="my-drawer-3"
//                 aria-label="close sidebar"
//                 className="btn btn-square btn-ghost"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   className="inline-block h-6 w-6 stroke-current"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   ></path>
//                 </svg>
//               </label>
//             </li>
//           </div>

//           {/* List of service groups and services for the sidebar */}
//           <button type="button" className="btn btn-secondary rounded-none mb-4">
//             Free Consultation
//           </button>
//           {serviceGroups.map((group) => (
//             <li key={group.sys.id} className="mb-2">
//               <details className="group">
//                 <summary className="cursor-pointer py-2 font-bold">
//                   {group.fields.groupName}
//                 </summary>
//                 <ul className="pl-4">
//                   {group.fields.services.map((service) => (
//                     <li key={service.sys.id} className="py-1">
//                       <Link
//                         href={`/services/${group.fields.slug}/${
//                           service.fields?.slug || "#"
//                         }`}
//                         className="text-sm text-gray-700 hover:underline"
//                       >
//                         {service.fields?.name || "#"}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </details>
//             </li>
//           ))}
//           <li>
//             <Link href={"/about-us"} className="group-name cursor-pointer">
//               About Us
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
