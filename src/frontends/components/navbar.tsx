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
import React from "react";

export default function NavbarEl() {
  const cookie = Cookies.get("status_login");

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
          <Link color="foreground" href="/courses" className="text-white">
            Kursus
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="community" className="text-white">
            Komunitas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/blog" className="text-white">
            Blog
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {!cookie ||cookie === "false" ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/login" className="text-white">
                Sign In
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/auth/register"
                className="text-white btn btn-success"
              >
                Sign Up
              </Link>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <section className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-circle avatar">
                <Image
                  src="/assets/images/avatar.png" // Avatar user
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
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
            </section>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
