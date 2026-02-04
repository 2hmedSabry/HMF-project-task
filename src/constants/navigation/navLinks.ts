import { OUR_PROJECTS_CONTENT } from "../content/ourProjects";
import { SERVICES_CARDS } from "../content/services";

// Navigation links Content
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "/services",
    subLinks: SERVICES_CARDS.map(service => ({
      label: service.title,
      href: `/services#${service.title.replace(/\s+/g, '-')}` // Link to section or unique page
    }))
  },
  {
    label: "Our Projects", href: "/projects", subLinks: OUR_PROJECTS_CONTENT.list.map(project => ({
      label: project.projectName,
      href: `/projects#${project.projectName.replace(/\s+/g, '-')}` // Link to section or unique page
    }))
  },
  { label: "Blog", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

