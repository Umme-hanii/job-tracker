import { Layers, AreaChart, AppWindow } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const NavLinks: NavLink[] = [
  { href: "/add-job", label: "add job", icon: <Layers /> },
  { href: "/jobs", label: "jobs", icon: <AppWindow /> },
  { href: "/stats", label: "add job", icon: <AreaChart /> },
];
