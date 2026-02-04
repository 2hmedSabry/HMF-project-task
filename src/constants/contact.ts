import { MailIcon, WhatsAppHeaderIcon, WhatsAppIcon, YoutubeIcon, InstagramIcon, FacebookIcon } from "@/components/ui/icons";

export const CONTACTS = {
  // this for header 
  links: [
    {
      label: "WhatsApp",
      href: "https://wa.me/1234567890",
      icon: WhatsAppHeaderIcon
    }, {
      label: "Email",
      href: "mailto:info@example.com",
      icon: MailIcon
    }
  ],
  // this for footer 
  socialLinks: [
    { href: "https://wa.me/966505933440", ariaLabel: "Contact via WhatsApp", icon: WhatsAppIcon },
    { href: "https://www.youtube.com/@hmfaqih", ariaLabel: "Our YouTube Channel", icon: YoutubeIcon },
    { href: "https://www.instagram.com/hmfaqih", ariaLabel: "Follow us on Instagram", icon: InstagramIcon },
    { href: "https://www.facebook.com/hmfaqih", ariaLabel: "Follow us on Facebook", icon: FacebookIcon }
  ]
};

