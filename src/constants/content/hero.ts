import { SectionWithCta } from "@/types/content";

export const HERO_CONTENT: SectionWithCta = {
    title: " نحو مستقبل عمراني متكامل",
    description: "نقدم في مكتب حسن محمد فقيه للاستشارات الهندسية مجموعة متكاملة من الخدمات الهندسية تشمل التصميم المعماري، الإشراف الهندسي، وإدارة المشاريع، مع التزام كامل بتطبيق أعلى معايير الجودة والابتكار. نعمل على تنفيذ المشاريع في منطقة الباحة وخارجها بكفاءة عالية، ونسعى دائمًا إلى تقديم حلول مخصصة تلبي تطلعات عملائنا وتسهم في تحسين البنية التحتية وتحقيق التنمية المستدامة.",
    cta: "من نحن",
    ctaLink: "/about",
};

export const HERO_SLIDES = [
    {
        id: 1,
        src: "/hero-backgroundN2.jpg",
        projectName: "مشروع فيلا الباحة",
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
        projectName: "مشروع برج العليا",
        content: {
            title: "تصاميم عصرية ومبتكرة",
            description: "نبتكر مساحات تعكس التطور والحداثة، مع مراعاة الهوية الثقافية والبيئية للمنطقة، لنقدم لكم تجربة معمارية فريدة.",
            cta: "مشاريعنا",
            ctaLink: "/projects"
        }
    },
    {
        id: 3,
        src: "/about.jpg",
        projectName: "مشروع مجمع النسيم",
        content: {
            title: "رؤية مستقبلية مستدامة",
            description: "نسعى جاهدين لتحقيق التميز في كل مشروع، من الفكرة الأولية حتى التسليم النهائي، مع التركيز على الاستدامة والجودة.",
            cta: "تواصل معنا",
            ctaLink: "/contact"
        }
    },
];
