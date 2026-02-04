import { FirstIcon, SecondIcon, ThirdIcon } from "@/components/ui/icons";
import { BaseSectionContent, SectionWithCta, AboutCard } from "@/types/content";

export const ABOUT_CONTENT: SectionWithCta = {
    title: "About Us",
    description: "About <br/>Hassan Mohammed Faqih Engineering Consultations",
    description2: "Specialized in providing technical and engineering services for projects and infrastructure since 2010. We work on providing innovative solutions that ensure project success and meet the needs of our clients from both government and private sectors with efficiency and professionalism, supported by an experienced team using the latest technologies and applying the highest international standards.",
    cta: "View More",
    ctaLink: "/about",
};

export const ABOUT_CARDS: AboutCard[] = [
    {
        title: "Integrated Engineering Solutions",
        description: "Designing and managing infrastructure projects of various types, from initial studies to execution and supervision.",
        icon: FirstIcon,
    },
    {
        title: "Specialized Technical Consultations",
        description: "Providing technical, hydrological, and geological studies and analyses that support decision-making and ensure project safety.",
        icon: SecondIcon,
    },
    {
        title: "Qualified Team",
        description: "A selection of engineers and experts providing innovative and sustainable solutions using the best international technologies and practices.",
        icon: ThirdIcon,
    },
];