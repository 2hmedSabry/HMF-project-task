export default function Nav({className, children , dir }: {className?: string, children: React.ReactNode, dir?: string,}) {
    return (
      <nav className={`hidden lg:flex items-center justify-between border border-white/50 rounded-[100px] px-5 ${className}`} dir={dir}>
           {children}
        </nav>
    );
}