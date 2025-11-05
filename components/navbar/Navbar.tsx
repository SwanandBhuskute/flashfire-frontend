import NavbarClient from "./NavbarClient";
import { navbarData } from "@/data/navbarData";

export default async function Navbar() {
  return <NavbarClient data={navbarData} />; // directly passs api data instead of fetching from json in ftuure
}
