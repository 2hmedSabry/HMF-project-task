import { MailIcon, WhatsAppHeaderIcon, WhatsAppIcon, YoutubeIcon, InstagramIcon, FacebookIcon } from "@/components/icons";
export const CONTACTS = {
  // this for header 
  links: [
    {
      label: "واتساب",
      href: "https://wa.me/1234567890",
      icon: <WhatsAppHeaderIcon />
    }, {
      label: "البريد الإلكتروني",
      href: "mailto:info@example.com",
      icon: <MailIcon />
    }
  ],
  // this for footer 
  socialLinks: [
    { href: "https://wa.me/966505933440", ariaLabel: "تواصل عبر واتساب", icon: <WhatsAppIcon /> },
    { href: "https://www.youtube.com/@hmfaqih", ariaLabel: "قناتنا على يوتيوب", icon: <YoutubeIcon /> },
    { href: "https://www.instagram.com/hmfaqih", ariaLabel: "تابعنا على انستغرام", icon: <InstagramIcon /> },
    { href: "https://www.facebook.com/hmfaqih", ariaLabel: "تابعنا على فيسبوك", icon: <FacebookIcon /> }
  ]
};
