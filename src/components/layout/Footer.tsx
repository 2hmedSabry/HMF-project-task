import {
    Button,
    LogoIcon,
    FooterArrowIcon,
    SlideUpAnimation,
    Typography,
    FooterLinkColumn,
    FooterSocialLinks,
    FooterContactSection
} from "@/components/ui";
import { FOOTER_CONTENT } from "@/constants/content/footer"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"


export default function Footer() {

    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto py-16 md:py-24 flex flex-col lg:flex-row p-2 gap-8 lg:gap-12">
                <div className="flex flex-col justify-between gap-12">
                    <div className="flex flex-col gap-6 p-2">
                        <div className="min-w-[150px] min-h-[78px] "><LogoIcon /></div>
                        <Typography variant="body" className="w-full lg:w-[457px]">
                            {FOOTER_CONTENT.about.description}
                        </Typography>

                        <SlideUpAnimation>
                            <Link
                                href={FOOTER_CONTENT.about.ctaLink || "#"}
                                className="text-[#B2B2B2] pt-1 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                            >
                                <Typography variant="body" className="font-bold">
                                    {FOOTER_CONTENT.about.ctaText}
                                </Typography>
                                <FooterArrowIcon />
                            </Link>
                        </SlideUpAnimation>

                        <FooterSocialLinks links={FOOTER_CONTENT.socialLinks} />
                    </div>
                    <div className="flex flex-col gap-6">
                        <Typography variant="body" className="font-bold">
                            {FOOTER_CONTENT.newsletter.title}
                        </Typography>
                        <div className="flex flex-row relative max-w-full">
                            <input
                                id="newsletter-email"
                                className="bg-white text-black w-full lg:w-[530px] h-full p-5 rounded-[81.04px]"
                                type="email"
                                placeholder="Email Address"
                                aria-label="Email address for newsletter subscription"
                            />
                            <Button href="/" className="absolute right-[1%] lg:right-[22%] top-[-11px] w-[117px] h-[60px] bg-black text-white rounded-[81.04px] hover:scale-90 transition-all duration-300" icon={<FaArrowRight size={20} />} aria-label="Subscribe to newsletter" />
                        </div>

                        <Typography variant="body-small" className="text-[#B2B2B2] w-full lg:w-[439px]">
                            {FOOTER_CONTENT.newsletter.disclaimer}
                        </Typography>
                    </div>

                    <div className="flex flex-col items-center lg:items-start lg:flex-row gap-2 lg:gap-0">
                        <Typography variant="body-small" className="text-[#B2B2B2]">
                            {FOOTER_CONTENT.copyright.text}
                        </Typography>
                        <Typography variant="body-small" className="ms-1">
                            {FOOTER_CONTENT.copyright.developer}
                        </Typography>
                    </div>
                </div>

                <div className="w-full lg:w-fit flex flex-col gap-13">
                    <div className="flex flex-col sm:flex-row justify-between gap-10 lg:gap-22">
                        <FooterLinkColumn
                            title={FOOTER_CONTENT.quickLinks.title}
                            links={FOOTER_CONTENT.quickLinks.links}
                        />
                        <FooterLinkColumn
                            title={FOOTER_CONTENT.projects.title}
                            links={FOOTER_CONTENT.projects.links}
                        />
                    </div>
                    <FooterContactSection />
                </div>
            </div>
        </footer>
    )
}