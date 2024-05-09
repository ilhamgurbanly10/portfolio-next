export interface Props {
    className?: string;
}

export interface ContactInfo {
    label: string;
    icon: React.ReactNode;
    value: string;
    type: 'address' | 'email' | 'phone';
    subvalue?: string;
}

export interface Social {
    href: string;
    icon: React.ReactNode;
}

export interface Contact {
    contactInfo: ContactInfo[];
    socials: Social[];
}