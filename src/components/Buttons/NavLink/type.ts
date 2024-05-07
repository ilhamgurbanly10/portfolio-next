export interface Props {
    className?: string;
    label: string;
    icon: React.ReactNode;
    href: string;
    activeClassName?: string;
    onClick?: () => void;
    isHomePage?: boolean;
}