import Link from "next/link";
import Image from "next/image";
import logoIcon from "../../public/assets/Logo.svg";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="" className="btn btn-ghost text-xl h-fit p-2 flex flex-row">
          <div className="w-12">
            <Image priority src={logoIcon} alt="logo" />
          </div>
          <p className="font-catcheye text-3xl">Clinic Trip</p>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="">Item 1</Link>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <Link href="">Submenu 1</Link>
                </li>
                <li>
                  <Link href="">Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="">Item 3</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {/* Hamburger menu for small screens */}
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost w-12 h-12 p-1"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                fill="#000000"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="">Item 1</Link>
            </li>
            <li>
              <Link href="">Parent</Link>
              <ul className="p-2">
                <li>
                  <Link href="">Submenu 1</Link>
                </li>
                <li>
                  <Link href="">Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="">Item 3</Link>
            </li>
          </ul>
        </div>

        {/* <Link href="" className="btn">
          Button
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
