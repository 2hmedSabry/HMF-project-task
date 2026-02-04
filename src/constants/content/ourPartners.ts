import { PartnerItem } from "@/types/content";

export const OUR_PARTNERS_CONTENT: { title: string; subtitle: string; description: string; partners: PartnerItem[] } = {
    title: "Our Partners",
    subtitle: "Our Partners in Success",
    description: "We are proud of our collaboration with leading organizations and companies that share our commitment to quality, innovation, and excellence. Together, we build sustainable value and achieve successful projects across various sectors.",
    partners: [
        {
            id: 1,
            image: "/ourPartners/ourPartners1.png",
            alt: "Partner 1",
            description: "We provide integrated technical and specialized consulting services covering project stages from study and design to supervision and execution, according to the highest quality and safety standards."
        },
        {
            id: 2,
            image: "/ourPartners/ourPartners2.png",
            alt: "Partner 2",
            description: "Company specialized in architectural design and urban planning."
        },
        {
            id: 3,
            image: "/ourPartners/ourPartners3.png",
            alt: "Partner 3",
            description: "Leading organization in project management and engineering supervision."
        }
    ]
};

