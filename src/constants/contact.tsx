import { MailIcon } from "@/components/layout/header/icons/MailIcon";
import { WhatsAppIcon } from "@/components/layout/header/icons/WhatsAppIcon";
import {
  WhatsAppFooterIcon,
  YoutubeIcon,
  InstagramFooterIcon,
  FacebookIcon
} from "@/components/layout/footer/icons";


export const CONTACTS = {
  // this for header 
  links: [
    {
      label: "واتساب",
      href: "https://wa.me/1234567890",
      icon: <WhatsAppIcon />
    }, {
      label: "البريد الإلكتروني",
      href: "mailto:info@example.com",
      icon: <MailIcon />
    }
  ],
  // this for footer 
  socialLinks: [
    { href: "https://wa.me/966505933440", ariaLabel: "تواصل عبر واتساب", icon: <WhatsAppFooterIcon /> },
    { href: "https://www.youtube.com/@hmfaqih", ariaLabel: "قناتنا على يوتيوب", icon: <YoutubeIcon /> },
    { href: "https://www.instagram.com/hmfaqih", ariaLabel: "تابعنا على انستغرام", icon: <InstagramFooterIcon /> },
    { href: "https://www.facebook.com/hmfaqih", ariaLabel: "تابعنا على فيسبوك", icon: <FacebookIcon /> }
  ]
};
