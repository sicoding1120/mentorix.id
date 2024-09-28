import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";

export default function NavbarEl() {
  return (
    <Navbar className="bg-color-primary bg-opacity-80 text-white py-2">
      <NavbarBrand className="gap-2">
        <Image src={"/assets/logo/MENTORIX2.png"} alt={"Mentorix"} width={50} height={50} />
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
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className="text-white">Sign In</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="text-white btn btn-success">Sign Up</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}