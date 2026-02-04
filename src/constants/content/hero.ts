import { SectionWithCta } from "@/types/content";

export const HERO_CONTENT: SectionWithCta = {
    title: "Towards an Integrated Urban Future",
    description: "At Hassan Mohammed Faqih Office for Engineering Consultations, we provide a comprehensive range of engineering services including architectural design, engineering supervision, and project management, with a full commitment to applying the highest standards of quality and innovation. We work on executing projects in Al-Baha region and beyond with high efficiency, always striving to provide customized solutions that meet our clients' aspirations and contribute to improving infrastructure and achieving sustainable development.",
    cta: "About Us",
    ctaLink: "/about",
};

export const HERO_SLIDES = [
    {
        id: 1,
        src: "/hero-backgroundN2.jpg",
        projectName: "Al-Baha Villa Project",
        content: {
            title: HERO_CONTENT.title,
            description: HERO_CONTENT.description,
            cta: HERO_CONTENT.cta,
            ctaLink: HERO_CONTENT.ctaLink
        }
    },
    {
        id: 2,
        src: "/hero-backgroundN1.jpg",
        projectName: "Al-Olaya Tower Project",
        content: {
            title: "Modern and Innovative Designs",
            description: "We innovate spaces that reflect development and modernity, taking into account the cultural and environmental identity of the region, to provide you with a unique architectural experience.",
            cta: "Our Projects",
            ctaLink: "/projects"
        }
    },
    {
        id: 3,
        src: "/about.jpg",
        projectName: "Al-Naseem Complex Project",
        content: {
            title: "Sustainable Future Vision",
            description: "We strive to achieve excellence in every project, from the initial idea to the final delivery, with a focus on sustainability and quality.",
            cta: "Contact Us",
            ctaLink: "/contact"
        }
    },
];

