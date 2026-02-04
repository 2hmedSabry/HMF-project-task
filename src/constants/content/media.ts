import { BaseSectionContent, MediaCard, NavLink } from "@/types/content";

export const MEDIA_SECTION_CONTENT: { title: string; list: NavLink[]; cards: MediaCard[] } = {
    title: "News &<br/> Activities and Events",
    list: [
        {
            label: "News",
            href: "/news"
        },
        {
            label: "Activities and Events",
            href: "/events"
        }
    ],
    cards: [{
        title: "Faqih Office signs a consulting contract with Imam Abdulrahman bin Faisal University",
        description: "MIP announces its partnership with Faqih Office for Engineering Consultations to provide urban and regional planning consulting services to the Eastern Province Development Authority.",
        image: "/mediaSection/1.jpg",
        tag: "Company"
    }, {
        title: "Field workshop for Interior Design students in Jazan",
        description: "Faqih Office organized a field visit for students of the College of Architecture and Design at Jazan University to present the details of the office's projects and introduce them to design and engineering supervision procedures.",
        image: "/mediaSection/2.jpg",
        tag: "Educational"
    }, {
        title: "Field workshop for Interior Design students in Jazan",
        description: "Faqih Office organized a field visit for students of the College of Architecture and Design at Jazan University to present the details of the office's projects and introduce them to design and engineering supervision procedures.",
        image: "/mediaSection/1.jpg",
        tag: "Educational"
    }, {
        title: "Field workshop for Interior Design students in Jazan",
        description: "Faqih Office organized a field visit for students of the College of Architecture and Design at Jazan University to present the details of the office's projects and introduce them to design and engineering supervision procedures.",
        image: "/mediaSection/4.png",
        tag: "Educational"
    }]
}

