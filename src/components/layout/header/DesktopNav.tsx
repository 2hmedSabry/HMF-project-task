'use client'
import { AnimatedNav } from "@/components/ui/animations";
import { NAV_LINKS } from "@/constants/navigation/navLinks";

export default function DesktopNav() {
  return (
    <AnimatedNav
      links={NAV_LINKS}
      navClassName="w-[872px] h-16"
      linkClassName="px-4 py-4"
      lineColor="bg-white"
      lineWidth={30}
      lineHeight="1.5px"
    />
  )
}
