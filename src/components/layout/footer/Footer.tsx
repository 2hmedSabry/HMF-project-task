import Button from "@/components/ui/Button"
import { LogoIcon } from "../header/icons/LogoIcon"
import { FOOTER_CONTENT } from "@/constants/footerContent"
import Link from "next/link"
import {
    WhatsAppFooterIcon,
    YoutubeIcon,
    InstagramFooterIcon,
    FacebookIcon,
    ArrowIcon,
    ChevronLeftIcon,
    LocationIcon,
    EmailIcon,
    PhoneIcon,
    AboutArrowIcon
} from "./icons"

export default function Footer() {

    return (
        <footer className="bg-black text-white min-h-screen">
            <div className="container mx-auto py-10 pt-19 flex flex-row gap-5">
                <div className="w-fit flex flex-col justify-between gap-29">
                    <div className="flex flex-col gap-6 p-2">
                        <div className="min-w-[150px] min-h-[78px] "><LogoIcon /></div>
                        <p className="w-[457px] text-[18px] ">{FOOTER_CONTENT.about.description}</p>
                        <Link href={FOOTER_CONTENT.about.ctaLink} className="text-[#B2B2B2] text-xl font-bold inline-flex items-center gap-2 " >{FOOTER_CONTENT.about.ctaText}<AboutArrowIcon /></Link>
                        <div className="flex flex-row justify-between gap-5 w-fit px-3">
                            <Link href={FOOTER_CONTENT.socialLinks.whatsappLink} target="_blank" className="p-1">    <WhatsAppFooterIcon /></Link>
                            <Link href={FOOTER_CONTENT.socialLinks.youtubeLink} target="_blank" className="p-1">    <YoutubeIcon /></Link>
                            <Link href={FOOTER_CONTENT.socialLinks.instagramLink} target="_blank" className="p-1">    <InstagramFooterIcon /></Link>
                            <Link href={FOOTER_CONTENT.socialLinks.facebookLink} target="_blank" className="p-1">    <FacebookIcon /></Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <span className="font-bold">{FOOTER_CONTENT.newsletter.title}</span>
                        <div className="flex flex-row relative">
                            <input className="bg-white text-black w-[530px] h-full p-5 rounded-[81.04px]" type="email" placeholder="البريد الالكتروني" />
                            <Button href="/" className="absolute left-[14%] top-[-11px] w-[117px] h-[60px] bg-black text-white rounded-[81.04px] " icon={<ArrowIcon />} />                        </div>
                        <span className="text-[#B2B2B2] text-sm w-[439px]">{FOOTER_CONTENT.newsletter.disclaimer}</span>
                    </div>

                    <div className="text-sm">
                        <span className="text-[#B2B2B2]">{FOOTER_CONTENT.copyright.text}</span>
                        <span>{FOOTER_CONTENT.copyright.developer}</span>
                    </div>
                </div>

                <div className="w-fit flex flex-col gap-13">
                    <div className="flex flex-row justify-between gap-22">
                        <div className="flex flex-col gap-4 py-2">
                            <span className="text-xl font-bold">{FOOTER_CONTENT.quickLinks.title}</span>
                            {FOOTER_CONTENT.quickLinks.links.map((link, index) => (
                                <Link key={index} className="text-[#B2B2B2] flex items-center gap-3 pl-3 py-1" href={link.href}><ChevronLeftIcon /> {link.label}</Link>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 py-2">
                            <span className="text-xl font-bold">{FOOTER_CONTENT.projects.title}</span>
                            {FOOTER_CONTENT.projects.links.map((link, index) => (
                                <Link key={index} className="text-[#B2B2B2] flex items-center gap-3 pl-3 py-1" href={link.href}><ChevronLeftIcon /> {link.label}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-2xl mb-1 font-bold p-1">تواصل معنا</span>
                        <span className="inline-flex items-center gap-3 ">
                            <LocationIcon />
                            {FOOTER_CONTENT.contact.address}
                        </span>
                        <Link href={FOOTER_CONTENT.contact.directionsLink} className="text-xl font-bold inline-flex items-center gap-1 mr-12 text-[#B2B2B2] hover:text-white transition-colors">
                            {FOOTER_CONTENT.contact.directionsText}
                            <AboutArrowIcon />
                        </Link>
                        <Link href={FOOTER_CONTENT.contact.emailLink} className="inline-flex items-center gap-3 text-[#B2B2B2] transition-colors">
                            <EmailIcon />
                            {FOOTER_CONTENT.contact.email}
                        </Link>
                        <Link href={FOOTER_CONTENT.contact.phoneLink} className="inline-flex items-center flex-row-reverse gap-3 text-[#B2B2B2] transition-colors  " dir="ltr">
                            <PhoneIcon />
                            {FOOTER_CONTENT.contact.phone}
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    )
}