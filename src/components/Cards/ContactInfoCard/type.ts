export interface Props {
    className?: string;
    label: string;
    icon: React.ReactNode;
    type: 'email' | 'phone' | 'address';
    value: string;
    subvalue?: string;
}