import Link from "next/link";


const ArrowsIcon = () => {
    return (
     <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_730_500)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8431 11.2889L18.5001 5.63186L19.9141 7.04586L14.9641 11.9959L19.9141 16.9459L18.5001 18.3599L12.8431 12.7029C12.6556 12.5153 12.5503 12.261 12.5503 11.9959C12.5503 11.7307 12.6556 11.4764 12.8431 11.2889Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.84306 11.2889L11.5001 5.63186L12.9141 7.04586L7.96406 11.9959L12.9141 16.9459L11.5001 18.3599L5.84306 12.7029C5.65559 12.5153 5.55028 12.261 5.55028 11.9959C5.55028 11.7307 5.65559 11.4764 5.84306 11.2889Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_730_500" x="0" y="0" width="27" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_730_500"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_730_500" result="shape"/>
</filter>
</defs>
</svg>

    )
}

export default function Button({ href, children, icon, className }: { href: string, children: React.ReactNode, icon?: React.ReactNode, className?: string }) {
    return (
        <Link href={href} className={`inline-flex items-center justify-center gap-2 mt-4 px-6  ${className}`}>
            <span>{children}</span>
            <span className="text-white mt-[10px]">
                {icon ? icon : <ArrowsIcon />}
            </span>
        </Link>
    )
}