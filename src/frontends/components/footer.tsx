import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = document.body.classList.contains("dark");
    setIsDarkMode(darkMode);
  }, []);

  return (
    <div>
      <footer className="footer bg-base-200 dark:bg-color-primary dark:text-color-background p-10">
        <aside>
          <Image
            src={isDarkMode ? "/assets/logo/mentorix2.png" : "/assets/logo/mentorix.png"}
            alt={"logo"}
            width={112}
            height={112}
          />
          <p>
            MENTORIX Ltd. is a Private Limited Company
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="font-semibold text-lg text-color-primary dark:text-white">Services</h6>
          <Link href={"/services"} className="link link-hover">Terms of Services</Link>
          <Link href={"#"} className="link link-hover">Branding</Link>
          <Link href={"#"} className="link link-hover">Design</Link>
          <Link href={"#"} className="link link-hover">Marketing</Link>
          <Link href={"#"} className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="font-semibold text-lg text-color-primary dark:text-white">Company</h6>
          <Link href={"#"} className="link link-hover">About us</Link>
          <Link href={"#"} className="link link-hover">Contact</Link>
          <Link href={"#"} className="link link-hover">Jobs</Link>
          <Link href={"#"} className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <h6 className="font-semibold text-lg text-color-primary dark:text-white">Legal</h6>
          <Link href={"/privacy"} className="link link-hover">Privacy policy</Link>
          <Link href={"/FAQ"} className="link link-hover">Frequently Asked Questions</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
