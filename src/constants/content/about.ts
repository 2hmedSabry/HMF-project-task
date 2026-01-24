import { FirstIcon, SecondIcon, ThirdIcon } from "@/components/ui/icons";
import { BaseSectionContent, SectionWithCta, AboutCard } from "@/types/content";

export const ABOUT_CONTENT: SectionWithCta = {
    title: "معلومات عنا",
    description: "عن شركة <br/>حسن فقيه للاستشارات الهندسية",
    description2: "متخصصة في تقديم الخدمات الفنية والهندسية للمشاريع والبنى التحتية منذ عام 2010. نعمل على توفير حلول مبتكرة تضمن نجاح المشاريع وتلبي احتياجات عملائنا من الجهات الحكومية والخاصة بكفاءة واحترافية، بدعم من فريق متمرس يستخدم أحدث التقنيات ويطبق أعلى المعايير العالمية.",
    cta: "شاهد المزيد",
    ctaLink: "/about",
};

export const ABOUT_CARDS: AboutCard[] = [
    {
        title: "حلول هندسية متكاملة",
        description: "تصميم وإدارة مشاريع البنية التحتية بمختلف أنواعها، من الدراسات الأولية حتى التنفيذ والإشراف.",
        icon: FirstIcon,
    },
    {
        title: "استشارات فنية متخصصة",
        description: "تقديم دراسات وتحاليل فنية وهيدرولوجية وجيولوجية تدعم اتخاذ القرار وتضمن سلامة المشروع.",
        icon: SecondIcon,
    },
    {
        title: "فريق عمل مؤهل",
        description: "نخبة من المهندسين والخبراء يقدمون حلولًا مبتكرة ومستدامة باستخدام أفضل التقنيات والممارسات العالمية.",
        icon: ThirdIcon,
    },
];