"use client"
import { motion } from "framer-motion";

export const InitIcon = ({ isOpen, color }: { isOpen?: boolean; color?: string }) => {
    return (
        <motion.svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                d="M30 12H3"
                stroke={color || "white"}
                strokeWidth="3.375"
                animate={{ y: isOpen ? 9 : 0 }} // Moves to y=21 position
                transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <motion.path
                d="M30 21L14.25 21"
                stroke={color || "white"}
                strokeWidth="3.375"
                animate={{ y: isOpen ? -9 : 0 }} // Moves to y=12 position
                transition={{ duration: 0.4, ease: "easeInOut" }}
            />
        </motion.svg>
    );
}