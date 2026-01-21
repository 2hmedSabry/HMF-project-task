import { OUR_PROJECTS_CONTENT } from "./ourProjectsContent";
import { SERVICES_CARDS } from "./servicesContent";

// Navigation links Content
export const NAV_LINKS = [
  { label: "الصفحه الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  {
    label: "خدماتنا",
    href: "/services",
    subLinks: SERVICES_CARDS.map(service => ({
      label: service.title,
      href: `/services#${service.title.replace(/\s+/g, '-')}` // Link to section or unique page
    }))
  },
  {
    label: "مشاريعنا", href: "/projects", subLinks: OUR_PROJECTS_CONTENT.list.map(project => ({
      label: project.projectName,
      href: `/projects#${project.projectName.replace(/\s+/g, '-')}` // Link to section or unique page
    }))
  },
  { label: "المدونة", href: "/news" },
  { label: "الوظائف", href: "/gallery" },
  { label: "تواصل معنا", href: "/contact" },
];
