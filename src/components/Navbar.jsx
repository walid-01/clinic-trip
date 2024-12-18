"use client";
import Link from "next/link";
import Image from "next/image";
import logoIcon from "../../public/assets/Logo_2.svg";
import { createClient } from "contentful";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [serviceGroups, setServiceGroups] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchServiceGroups = async () => {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
      });

      const res = await client.getEntries({
        content_type: "serviceGroup",
        include: 2,
      });

      setServiceGroups(res.items);
      if (res.items.length > 0) {
        setSelectedCategory(res.items[0].sys.id); // Default to the first category
      }
    };

    fetchServiceGroups();
  }, []);

  const selectedGroup = serviceGroups.find(
    (group) => group.sys.id === selectedCategory
  );

  return (
    <div className="drawer drawer-end z-50 border-b border-gray-200">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-gray-50 px-4 sm:px-20 py-4">
          <div className="navbar-start">
            <Link href="/" className="w-44 p-2 lg:w-64">
              <Image priority src={logoIcon} alt="logo" />
            </Link>
          </div>

          <div className="navbar-center hidden xl:flex">
            <ul className="flex items-center gap-8 px-1">
              <li>
                <Link href={"/"} className="relative group font-semibold ">
                  HOME
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                </Link>
              </li>
              {/* Treatments dropdown */}
              <li className="relative group">
                <div className="cursor-pointer py-4 flex items-center font-semibold">
                  TREATMENTS
                </div>
                <ul className="absolute left-0 p-0 top-full hidden group-hover:flex active:bg-white focus:bg-white bg-white hover:bg-white shadow-lg z-50 w-auto max-h-[400px] h-[400px] hover:cursor-default">
                  {/* Categories list on the left */}
                  <div className="w-56 h-full flex flex-col gap-[1px]">
                    {serviceGroups.map((group) => (
                      <li
                        key={group.sys.id}
                        className={`cursor-pointer h-1/4 flex text-base px-4 ${
                          selectedCategory === group.sys.id
                            ? "font-semibold"
                            : "bg-black/90 text-white"
                        }`}
                        onMouseEnter={() => setSelectedCategory(group.sys.id)}
                      >
                        <Link
                          className="hover:bg-transparent h-full w-full rounded-none flex items-center active:bg-white"
                          href={`/services/${group.fields.slug}`}
                        >
                          {group.fields.groupName.toUpperCase()}
                        </Link>
                      </li>
                    ))}
                  </div>
                  {/* Services list on the right */}
                  <div className="w-96 grid grid-cols-2 auto-rows-fr">
                    {selectedGroup?.fields?.services?.map((service) => (
                      <Link
                        href={`/services/${selectedGroup.fields.slug}/${
                          service.fields?.slug || "#"
                        }`}
                        key={service.sys.id}
                        className="text-gray-700 flex items-center text-wrap px-4 h-full hover:bg-gray-50 border-b border-transparent hover:border-b hover:border-black"
                      >
                        {service.fields?.name || "Unnamed Service"}
                      </Link>
                    ))}
                  </div>
                </ul>
              </li>
              {/* <li className="relative group">
                <div className="cursor-pointer py-4 flex items-center font-semibold ">
                  BEFORE / AFTER
                </div>
                <ul className="absolute left-0 p-0 top-full hidden group-hover:flex bg-white shadow-lg z-50 w-auto max-h-[300px] h-[300px]">
                  <div className="w-56 h-full flex flex-col gap-[1px]">
                    {serviceGroups.map((group) => (
                      <li
                        key={group.sys.id}
                        className="cursor-pointer h-1/4 flex text-base bg-black/90 text-white"
                      >
                        <Link
                          className="hover:bg-white hover:text-black hover:font-semibold px-4 h-full w-full flex items-center"
                          href={`/before-after/${group.fields.slug}`}
                        >
                          {group.fields.groupName.toUpperCase()}
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </li> */}
              <li>
                <Link href={"/#faq"} className="relative group font-semibold ">
                  FAQs
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/gallery"}
                  className="relative group font-semibold "
                >
                  Gallery
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/about-us"}
                  className="relative group font-semibold "
                >
                  ABOUT US
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="relative group font-semibold "
                >
                  CONTACT
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="flex-none xl:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden xl:block">
              <button
                type="button"
                className="btn btn-secondary rounded-none mr-3"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
        {/* Page content */}
      </div>

      {/* Sidebar drawer */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 p-4 bg-white">
          {/* Close button inside the drawer */}
          <div className="flex justify-end">
            <li className="drawer-close mb-2">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </label>
            </li>
          </div>

          {/* List of service groups and services for the sidebar */}
          <button type="button" className="btn btn-secondary rounded-none mb-4">
            Free Consultation
          </button>
          <li className="cursor-pointer mb-2 font-bold">
            <Link href="/">Home</Link>
          </li>
          {serviceGroups.map((group) => (
            <li key={group.sys.id} className="mb-2">
              <details className="group">
                <summary className="cursor-pointer py-2 font-bold">
                  {group.fields.groupName}
                </summary>
                <ul className="pl-4">
                  {group.fields.services.map((service) => (
                    <li key={service.sys.id} className="py-1">
                      <Link
                        href={`/services/${group.fields.slug}/${service.fields.slug}`}
                        className="text-sm text-gray-700 hover:underline"
                      >
                        {service.fields.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          ))}
          <li className="cursor-pointer mb-2 font-bold">
            <Link href="/#faq">FAQs</Link>
          </li>
          <li className="cursor-pointer mb-2 font-bold">
            <Link href="/gallery">Gallery</Link>
          </li>
          <li className="cursor-pointer mb-2 font-bold">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="cursor-pointer mb-2 font-bold">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
