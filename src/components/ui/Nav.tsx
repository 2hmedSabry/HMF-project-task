export default function Nav({className, children }: {className?: string, children: React.ReactNode,}) {
    return (
      <nav className={`hidden lg:flex items-center justify-between border border-white/50 rounded-[100px] px-5 ${className}`}>
           {children}
        </nav>
    );
}