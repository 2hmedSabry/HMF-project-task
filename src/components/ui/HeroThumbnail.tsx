import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HeroThumbnailProps {
    src: string;
    isActive: boolean;
    onClick: () => void;
    projectName?: string;
}

export default function HeroThumbnail({ src, isActive, onClick, projectName }: HeroThumbnailProps) {

    return (
        <motion.div
            whileTap={{ scale: 0.95 }}
            initial="initial"
            whileHover="hover"
            animate="initial"
            className={`relative rounded-xl cursor-pointer transition-all overflow-hidden ${isActive ? "shadow-[0_0_10.4px_#ffffff80]" : ""}`}
            onClick={onClick}

        >
            <motion.div
                variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.1 }
                }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
            >
                <Image
                    src={src}
                    alt="Hero Banner"
                    width={200}
                    height={156}
                    style={{ height: 'auto' }}
                    sizes="200px"
                    className="rounded-xl object-cover"
                />
            </motion.div>

            {projectName && (
                <motion.div
                    variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent flex items-end justify-center pb-4 rounded-xl"
                >
                    <motion.span
                        variants={{
                            initial: { y: 20, opacity: 0 },
                            hover: { y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        className="text-white text-sm font-bold text-center px-3 py-1"
                    >
                        {projectName}
                    </motion.span>
                </motion.div>
            )}
        </motion.div>
    );
}
