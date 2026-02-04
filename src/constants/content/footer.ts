import { ContactLink, FooterSection, NavLink } from "@/types/content";
import { CONTACTS } from "@/constants/contact";

export const FOOTER_CONTENT: {
    about: FooterSection;
    newsletter: { title: string; placeholder: string; disclaimer: string };
    socialLinks: ContactLink[];
    quickLinks: { title: string; links: NavLink[] };
    projects: { title: string; links: NavLink[] };
    contact: FooterSection;
    copyright: { text: string; developer: string };
} = {
    about: {
        description: "At Hassan Mohammed Faqih Office for Engineering Consultations, we offer years of experience in providing integrated engineering solutions, from studies and designs to supervision and execution.",
        ctaText: "More About Us",
        ctaLink: "/about"
    },
    newsletter: {
        title: "Subscribe to Our Newsletter",
        placeholder: "Email Address",
        disclaimer: "Your email address will be kept confidential and will only be used to send the newsletter or respond to any inquiries."
    },
    socialLinks: CONTACTS.socialLinks,
    quickLinks: {
        title: "Quick Links",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Our Projects", href: "/projects" },
            { label: "Our Services", href: "/services" },
            { label: "Careers", href: "/careers" },
            { label: "Blog", href: "/blog" },
            { label: "Contact Us", href: "/contact" }
        ]
    },
    projects: {
        title: "Our Projects",
        links: [
            { label: "Jazan City", href: "/projects/jazan" },
            { label: "South Suburb", href: "/projects/south" },
            { label: "South Corniche", href: "/projects/corniche" },
            { label: "Al-Khalidiya District", href: "/projects/khalidiya" },
            { label: "Al-Shaqiq Beach", href: "/projects/shaqiq" },
            { label: "Coral Island Beach", href: "/projects/marjan" },
            { label: "Souq Al-Balad", href: "/projects/souq" }
        ]
    },
    contact: {
        address: "Jazan - Safa District - King Faisal Street",
        directionsText: "Get Directions",
        directionsLink: "https://maps.google.com",
        email: "info@hmfaqih.com",
        emailLink: "mailto:info@hmfaqih.com",
        phone: "+966 50 593 3440",
        phoneRaw: "+966505933440",
        phoneLink: "tel:+966505933440"
    },
    copyright: {
        text: "All rights reserved to Hassan Mohammed Faqih Engineering Consultations © 2025",
        developer: "Developed by AL Master"
    },

}

