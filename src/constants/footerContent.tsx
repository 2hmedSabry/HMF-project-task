import { CONTACTS } from "./contact";

export const FOOTER_CONTENT = {
    about: {
        description: "في مكتب حسن محمد فقيه للاستشارات الهندسية، نقدم سنوات من الخبرة في تقديم الحلول الهندسية المتكاملة، من الدراسات والتصاميم إلى الإشراف والتنفيذ.",
        ctaText: "المزيد عنا",
        ctaLink: "/about"
    },
    newsletter: {
        title: "اشترك في القائمة البريدية لدينا",
        placeholder: "البريد الالكتروني",
        disclaimer: "سيتم الحفاظ على سرية عنوان بريدك الإلكتروني ولن يتم استخدامه إلا لإرسال النشرة الإخبارية أو الرد على أي استفسارات."
    },
    socialLinks: CONTACTS.socialLinks,
    quickLinks: {
        title: "روابط سريعة",
        links: [
            { label: "الصفحه الرئيسية", href: "/" },
            { label: "من نحن", href: "/about" },
            { label: "مشاريعنا", href: "/projects" },
            { label: "خدماتنا", href: "/services" },
            { label: "الوظائف", href: "/careers" },
            { label: "المدونة", href: "/blog" },
            { label: "اتصل بنا", href: "/contact" }
        ]
    },
    projects: {
        title: "مشاريعنا",
        links: [
            { label: "مدينة جيزان", href: "/projects/jazan" },
            { label: "الضاحية الجنوبية", href: "/projects/south" },
            { label: "الكورنيش الجنوبى", href: "/projects/corniche" },
            { label: "حى الخالديه", href: "/projects/khalidiya" },
            { label: "شاطئ الشقيق", href: "/projects/shaqiq" },
            { label: "شاطئ جزيرة المرجان", href: "/projects/marjan" },
            { label: "سوق البلد", href: "/projects/souq" }
        ]
    },
    contact: {
        address: "جازان - حي الصفا - شارع الملك فيصل",
        directionsText: "الحصول على الاتجاهات",
        directionsLink: "https://maps.google.com",
        email: "info@hmfaqih.com",
        emailLink: "mailto:info@hmfaqih.com",
        phone: "+966 50 593 3440",
        phoneRaw: "+966505933440",
        phoneLink: "tel:+966505933440"
    },
    copyright: {
        text: "حقوق النشر محفوظة لشركة حسن محمد فقيه للاستشارات الهندسية © 2025",
        developer: "تم تطويره بواسطة AL Master"
    },

}