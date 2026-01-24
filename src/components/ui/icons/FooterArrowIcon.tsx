import { SVGProps } from "react";

export const FooterArrowIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#directions_icon_clip)">
            <path d="M21.7668 24.4315C17.7894 26.9357 12.5491 25.7446 10.0449 21.7673C7.54076 17.7899 8.73183 12.5496 12.7092 10.0454C16.6865 7.54124 21.9268 8.73231 24.431 12.7096C26.9352 16.687 25.7441 21.9273 21.7668 24.4315ZM13.242 10.8916C9.73006 13.1028 8.68004 17.7226 10.8912 21.2345C13.1023 24.7464 17.7221 25.7964 21.234 23.5853C24.7459 21.3741 25.7959 16.7543 23.5848 13.2424C21.3736 9.73054 16.7539 8.68052 13.242 10.8916Z" fill="currentColor" />
            <path d="M21.2028 15.7461L15.4798 14.4454L14.1791 20.1684L13.2137 19.949L14.7339 13.2606L21.4223 14.7808L21.2028 15.7461Z" fill="currentColor" />
            <path d="M14.6836 14.1201L15.5298 13.5873L20.0586 20.7804L19.2124 21.3132L14.6836 14.1201Z" fill="currentColor" />
        </g>
        <defs>
            <clipPath id="directions_icon_clip">
                <rect width="25" height="25" fill="white" transform="translate(0 13.3203) rotate(-32.1949)" />
            </clipPath>
        </defs>
    </svg>
);
