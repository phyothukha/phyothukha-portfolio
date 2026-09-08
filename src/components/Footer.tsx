import { footerLink } from "@/data/footer";
import React from "react";

const Footer = () => {
  return (
    <footer className=" container mx-auto max-w-6xl my-5 ">
      <div className=" flex justify-center gap-10">
        {footerLink.map(({ id, icons }) => (
          <div
            key={id}
            className=" p-3 border-2 dark:border-secondary border-wtsecondary rounded-full cursor-pointer transition-shadow duration-500 dark:shadow-small dark:hover:shadow-medium shadow-wtsmall hover:shadow-wtmedium  "
          >
            {icons}
          </div>
        ))}
      </div>
      <p className="  text-center mt-5">
        Design By{" "}
        <a href="/">
          <span className=" dark:text-secondary text-wtsecondary font-light font-Poetsen  cursor-pointer">
            Phyo Thu Kha
          </span>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
