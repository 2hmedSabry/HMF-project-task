import Link from 'next/link';
import { ArrowIcon } from '@/components/ui/icons';

interface AnimatedArrowLinkProps {
    href: string;
    className?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export default function AnimatedArrowLink({ href, className = '', icon, children }: AnimatedArrowLinkProps) {
    return (
        <Link
            href={href}
            className={`group rounded-full border-[0.8px] w-[95px] h-[55px] flex items-center justify-center transition-all duration-300 origin-top-right hover:scale-125 hover:bg-black ${className}`}
        >
            {icon}{children}
        </Link>
    );
}
