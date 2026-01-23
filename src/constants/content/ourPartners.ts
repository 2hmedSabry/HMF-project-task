import { PartnerItem } from "@/types/content";

export const OUR_PARTNERS_CONTENT: { title: string; subtitle: string; description: string; partners: PartnerItem[] } = {
    title: "شركائنا",
    subtitle: "شركاؤنا في النجاح",
    description: "نفخر بتعاوننا مع مؤسسات وشركات رائدة تشاركنا التزامنا بالجودة والابتكار والتميز. معًا، نبني قيمة مستدامة ونُنجز مشاريع ناجحة في مختلف القطاعات.",
    partners: [
        {
            id: 1,
            image: "/ourPartners/ourPartners1.png",
            alt: "شريك 1",
            description: "نقدّم خدمات فنية واستشارية متكاملة تغطي مراحل المشاريع من الدراسات والتصميم حتى الإشراف والتنفيذ، وفق أعلى معايير الجودة والسلامة."
        },
        {
            id: 2,
            image: "/ourPartners/ourPartners2.png",
            alt: "شريك 2",
            description: "شركة متخصصة في التصميم المعماري والتخطيط العمراني"
        },
        {
            id: 3,
            image: "/ourPartners/ourPartners3.png",
            alt: "شريك 3",
            description: "مؤسسة متميزة في إدارة المشاريع والإشراف الهندسي"
        }
    ]
};
