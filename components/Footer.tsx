import { about } from "@/portfolio";
import CustomLink from "./ui/CustomLink";

const Footer = () => (
  <footer className="mt-28">
    <CustomLink
      className="font-bold text-xs"
      href={about.social.github}
      target="_blank"
    >
      Created By {about.name}
    </CustomLink>
  </footer>
);

export default Footer;
