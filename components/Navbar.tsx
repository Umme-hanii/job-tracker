import MemberProfile from "./MemberProfile";
import ThemeToggle from "./ThemeToggle";
import LinksDropDown from "./LinksDropdown";

export function Navbar() {
  return (
    <nav className="bg-muted py-4 px-4 sm:px-16 lg:px-24 flex justify-between items-center">
      <div>
        <LinksDropDown />
      </div>
      <div className="flex gap-x-4 items-center">
        <ThemeToggle />
        <MemberProfile />
      </div>
    </nav>
  );
}
