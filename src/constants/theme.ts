/**
 * Design System Tokens
 * Standardizes colors and spacing across the project.
 */
export const THEME = {
    colors: {
        background: "#F7F6F6",
        white: "#FFFFFF",
        black: "#000000",
        text: {
            primary: "#000000",
            description: "#666666",
            footer: "#B2B2B2",
            gray: "#848484",
        },
        borders: {
            light: "rgba(0, 0, 0, 0.25)", // #00000040
            whiteTrans: "rgba(255, 255, 255, 0.3)", // white/30
        }
    },
    spacing: {
        sectionPadding: "py-16 md:py-24",
        containerGap: "gap-8 lg:gap-12",
        gridGap: "gap-4 lg:gap-6",
    },
    layout: {
        container: "container mx-auto px-4 md:px-6",
    }
};
