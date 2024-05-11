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

export interface ReturnType {
    // eslint-disable-next-line no-unused-vars
    onFinish: (values: FieldType) => Promise<void>;
    isSending: boolean;
}

export interface FieldType {
    email?: string;
    name?: string;
    message?: string;
  };