import { ReactNode } from "react";

export interface BaseSectionContent {
    title: string;
    description: string;
    description2?: string; // Optional as not all sections have it
    cta?: string;
    ctaLink?: string;
}

export interface SectionWithCta extends BaseSectionContent {
    cta: string;
    ctaLink: string;
}

export interface CardItem {
    title: string;
    description: string;
    image?: string;
    icon?: React.ComponentType | ReactNode;
}

export interface AboutCard extends CardItem {
    icon: React.ComponentType; // Specifically a component for About cards
}

export interface ServiceCard extends CardItem {
    image: string; // Services always have an image
}

export interface ProjectItem {
    flag: string;
    city: string;
    projectName: string;
    description: string;
    cta: string;
    ctaLink: string;
    image: string;
}

export interface PartnerItem {
    id: number;
    image: string;
    alt: string;
    description: string;
}

export interface MediaCard {
    title: string;
    description: string;
    tag: string;
    image: string;
}

export interface StatItem {
    label: string;
    value: number | string;
}

export interface NavLink {
    label: string;
    href: string;
    subLinks?: NavLink[];
}

export interface ContactLink {
    href: string;
    label?: string;
    icon?: React.ComponentType;
    ariaLabel?: string;
}

export interface FooterSection {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    links?: NavLink[];
    address?: string;
    email?: string;
    emailLink?: string;
    phone?: string;
    phoneRaw?: string;
    phoneLink?: string;
    directionsText?: string;
    directionsLink?: string;
}
