import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function NavbarEl() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const cookieUserId: any = Cookies.get("user_id");
    console.log("Cookie user_id:", cookieUserId);
    setUserId(cookieUserId);
  }, []);

  return (
    <Navbar className="bg-color-primary bg-opacity-80 text-white py-2">
      <NavbarBrand className="gap-2">
        <Image
          src={"/assets/logo/MENTORIX2.png"}
          alt={"Mentorix"}
          width={50}
          height={50}
        />
        <p className="font-bold text-inherit">MENTORIX</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Kursus
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-white">
            Komunitas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {!userId ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="#" className="text-white">
                Sign In
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="#" className="text-white btn btn-success">
                Sign Up
              </Link>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <div className="dropdown">
              <Image
                src="/path-to-avatar.jpg"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full cursor-pointer"
              />
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
