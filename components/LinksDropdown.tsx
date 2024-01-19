import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";
import { NavLinks } from "@/utils/links";

const LinksDropDown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="lg:hidden">
        <Button>
          <Menu />
          <span className="sr-only">Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-52 lg:hidden"
        sideOffset={25}
      >
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
  );
};

export default LinksDropDown;
