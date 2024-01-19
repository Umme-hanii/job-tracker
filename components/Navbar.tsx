import MemberProfile from "./MemberProfile";
import ThemeToggle from "./ThemeToggle";

export function Navbar() {
  return (
    <nav>
      <ThemeToggle />
      <MemberProfile />
    </nav>
  );
}
