import Link from "next/link";
import { Typography } from "@/components/ui";
import { SlideUpAnimation } from "@/components/ui/animations";
import { LocationIcon, FooterArrowIcon, EmailIcon, PhoneIcon } from "@/components/ui/icons";
import { FOOTER_CONTENT } from "@/constants/content/footer";

export default function FooterContactSection() {
    const { contact } = FOOTER_CONTENT;

    return (
        <div className="flex flex-col gap-3">
            <Typography variant="h3" className="mb-1 p-1">Contact Us</Typography>

            <span className="inline-flex items-center gap-1 ">
                <LocationIcon />
                {contact.address}
            </span>

            <SlideUpAnimation>
                <Link
                    href={contact.directionsLink || "#"}
                    className="inline-flex items-center p-2 gap-1 ml-12 text-[#B2B2B2] hover:text-white transition-colors"
                    aria-label={`Get directions to ${contact.address}`}
                >
                    <Typography variant="body" className="font-bold">
                        {contact.directionsText}
                    </Typography>
                    <FooterArrowIcon />
                </Link>
            </SlideUpAnimation>

            <SlideUpAnimation>
                <Link
                    href={contact.emailLink || "#"}
                    className="inline-flex items-center p-2 gap-3 text-[#B2B2B2] transition-colors"
                    aria-label={`Email us at: ${contact.email}`}
                >
                    <EmailIcon />
                    {contact.email}
                </Link>
            </SlideUpAnimation>

            <SlideUpAnimation>
                <Link
                    href={contact.phoneLink || "#"}
                    className="inline-flex items-center p-2 flex-row gap-3 text-[#B2B2B2] transition-colors"
                    dir="ltr"
                    aria-label={`Call us at: ${contact.phone}`}
                >
                    <PhoneIcon />
                    {contact.phone}
                </Link>
            </SlideUpAnimation>
        </div>

    );
}
