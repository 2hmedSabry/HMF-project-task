export default function Nav(
    { className = '', children, dir, borderColor = 'border border-white/50' , padding = 'px-3 ' ,onMouseLeave }
    : { className?: string, children: React.ReactNode, dir?: string, borderColor?: string , padding?: string , onMouseLeave?: () => void }) {
    return (
        <nav className={`flex items-center justify-between  rounded-[100px] relative ${className} ${borderColor} ${padding}`} dir={dir} onMouseLeave={onMouseLeave}>
            {children}
        </nav>
    );
}