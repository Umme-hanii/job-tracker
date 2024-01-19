"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

import Logo from "../assets/logo.svg";
import { NavLinks } from "@/utils/links";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <aside className="bg-secondary h-full py-4 px-8">
      <Image src={Logo} alt="logo" className="mx-auto" priority />

      <div className="flex flex-col gap-y-4 mt-20">
        {NavLinks.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathName == link.href ? "default" : "link"}
            >
              <Link href={link.href} className="flex gap-2 items-center">
                {link.icon} <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
