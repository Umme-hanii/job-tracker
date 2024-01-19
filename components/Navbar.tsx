import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

import MemberProfile from "./MemberProfile";
import ThemeToggle from "./ThemeToggle";
import { NavLinks } from "@/utils/links";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="bg-muted py-4 px-4 sm:px-16 lg:px-24 flex justify-between items-center">
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden">
            <Button>
              <Menu />
              <span className="sr-only">Toggle links</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-52" sideOffset={25}>
            {NavLinks.map((link) => {
              return (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className="flex items-center gap-x-2">
                    {link.icon} <span className="capitalize">{link.label}</span>
                  </Link>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-x-4 items-center">
        <ThemeToggle />
        <MemberProfile />
      </div>
    </nav>
  );
}
