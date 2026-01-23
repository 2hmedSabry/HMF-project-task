import React from "react"
import { Button } from "@/components/ui"
import { LogoIcon } from "@/components/icons"
import { FOOTER_CONTENT } from "@/constants/content/footer"
import { CONTACTS } from "@/constants/contact"
import Link from "next/link"
import {
    WhatsAppIcon,
    YoutubeIcon,
    InstagramIcon,
    FacebookIcon,
    ArrowIcon,
    ChevronLeftIcon,
    LocationIcon,
    EmailIcon,
    PhoneIcon,
    AboutArrowIcon,
    FooterArrowIcon
} from "@/components/icons"
import { SlideUpAnimation } from "@/components/ui/animations"
import { FaArrowLeft } from "react-icons/fa"

export default function Footer() {

    return (
        <footer className="bg-black text-white min-h-screen">
            <div className="container mx-auto py-10 pt-19 flex flex-row gap-5">
                <div className="w-fit flex flex-col justify-between gap-29">
                    <div className="flex flex-col gap-6 p-2">
                        <div className="min-w-[150px] min-h-[78px] "><LogoIcon /></div>
                        <p className="w-[457px] text-[18px] ">{FOOTER_CONTENT.about.description}</p>

                        <SlideUpAnimation>
                            <Link href={FOOTER_CONTENT.about.ctaLink || "#"} className="text-[#B2B2B2] pt-1  text-xl font-bold inline-flex items-center gap-2 " >{FOOTER_CONTENT.about.ctaText}<FooterArrowIcon />
                            </Link>
                        </SlideUpAnimation>

                        <div className="group/social flex flex-row justify-between gap-5 w-fit px-3">
                            {FOOTER_CONTENT.socialLinks.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    className="p-1 transition-all duration-300 
                                        group-hover/social:opacity-50 group-hover/social:translate-x-[4px] group-hover/social:translate-y-[4px]
                                        hover:opacity-100! hover:translate-x-[3px]! hover:translate-y-[4px]! hover:scale-120"
                                    aria-label={social.ariaLabel}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <span className="font-bold">{FOOTER_CONTENT.newsletter.title}</span>
                        <div className="flex flex-row relative">
                            <input
                                id="newsletter-email"
                                className="bg-white text-black w-[530px] h-full p-5 rounded-[81.04px]"
                                type="email"
                                placeholder="البريد الالكتروني"
                                aria-label="البريد الالكتروني للاشتراك في النشرة البريدية"
                            />
                            <Button href="/" className="absolute left-[14%] top-[-11px] w-[117px] h-[60px] bg-black text-white rounded-[81.04px] hover:scale-90 transition-all duration-300" icon={<FaArrowLeft size={20} />} aria-label="اشتراك في النشرة البريدية" />
                        </div>
                        <span className="text-[#B2B2B2] text-sm w-[439px]">{FOOTER_CONTENT.newsletter.disclaimer}</span>
                    </div>

                    <div className="text-sm">
                        <span className="text-[#B2B2B2]">{FOOTER_CONTENT.copyright.text}</span>
                        <span>{FOOTER_CONTENT.copyright.developer}</span>
                    </div>
                </div>

                <div className="w-fit flex flex-col gap-13">
                    <div className="flex flex-row justify-between gap-22">
                        <div className="flex flex-col gap-4 py-2 text-xl">
                            <span className="text-2xl font-bold">{FOOTER_CONTENT.quickLinks.title}</span>
                            {FOOTER_CONTENT.quickLinks.links.map((link, index) => (
                                <SlideUpAnimation>
                                    <Link key={index} className="text-[#B2B2B2] flex items-center gap-3 pl-3 py-1" href={link.href}><ChevronLeftIcon /> {link.label}</Link>
                                </SlideUpAnimation>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 py-2 text-xl">
                            <span className="text-2xl font-bold">{FOOTER_CONTENT.projects.title}</span>
                            {FOOTER_CONTENT.projects.links.map((link, index) => (
                                <SlideUpAnimation>
                                    <Link key={index} className="text-[#B2B2B2] flex items-center gap-3 pl-3 py-1" href={link.href}><ChevronLeftIcon /> {link.label}</Link>
                                </SlideUpAnimation>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-2xl mb-1 font-bold p-1">تواصل معنا</span>
                        <span className="inline-flex items-center gap-1 ">
                            <LocationIcon />
                            {FOOTER_CONTENT.contact.address}
                        </span>
                        <SlideUpAnimation>
                            <Link href={FOOTER_CONTENT.contact.directionsLink || "#"} className="text-xl font-bold inline-flex items-center p-2 gap-1 mr-12 text-[#B2B2B2] hover:text-white transition-colors">
                                {FOOTER_CONTENT.contact.directionsText}
                                <FooterArrowIcon />

                            </Link>
                        </SlideUpAnimation>
                        <SlideUpAnimation>
                            <Link href={FOOTER_CONTENT.contact.emailLink || "#"} className="inline-flex items-center p-2 gap-3 text-[#B2B2B2] transition-colors">
                                <EmailIcon />
                                {FOOTER_CONTENT.contact.email}
                            </Link>
                        </SlideUpAnimation>
                        <SlideUpAnimation>
                            <Link href={FOOTER_CONTENT.contact.phoneLink || "#"} className="inline-flex items-center p-2 flex-row-reverse gap-3 text-[#B2B2B2] transition-colors  " dir="ltr">
                                <PhoneIcon />
                                {FOOTER_CONTENT.contact.phone}
                            </Link>
                        </SlideUpAnimation>
                    </div>
                </div>
            </div>

        </footer>
    )
}