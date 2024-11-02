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

  // Find the currently selected category only once per render
  const currentCategory = serviceGroups.find(
    (group) => group.sys.id === selectedCategory
  );

  return (
    <div className="drawer drawer-end z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <Link href="/" className="w-44 p-2 lg:w-64">
              <Image priority src={logoIcon} alt="logo" />
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* Treatments dropdown */}
              <li className="relative group">
                <div className="cursor-pointer">Treatments</div>
                <div className="absolute left-0 top-full hidden group-hover:flex bg-white hover:bg-white hover:cursor-default shadow-lg z-50 p-4 w-auto h-[500px]">
                  {/* Categories list on the left */}
                  <div className="w-32">
                    <ul>
                      {serviceGroups.map((group) => (
                        <li
                          key={group.sys.id}
                          className={`p-2 cursor-pointer ${
                            selectedCategory === group.sys.id
                              ? "font-bold text-blue-600"
                              : "text-gray-800"
                          }`}
                          onMouseEnter={() => setSelectedCategory(group.sys.id)}
                        >
                          {group.fields.groupName}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Services list on the right */}
                  <div className="w-60">
                    <ul>
                      {currentCategory?.fields?.services?.map((service) => (
                        <li key={service.sys.id} className="py-1">
                          <Link
                            href={`/services/${service.fields?.slug}/${
                              service.fields?.slug || "#"
                            }`}
                            className="text-sm text-gray-700 hover:underline"
                          >
                            {service.fields?.name || "Unnamed Service"}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <div className="flex-none lg:hidden">
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

            <div className="flex-none hidden lg:block">
              <button
                type="button"
                className="btn btn-secondary rounded-none mr-3"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
