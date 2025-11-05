import NavbarClient from "./NavbarClient";
import { navbarData } from "@/data/navbarData";

export default async function Navbar() {
  // Could be replaced by `await getNavbarData()` in future
  return <NavbarClient data={navbarData} />;
}
