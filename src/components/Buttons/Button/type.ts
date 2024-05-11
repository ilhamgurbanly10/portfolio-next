export interface Props {
    className?: string;
    label: string;
    type?: 'primary' | 'danger', 
    btnType?: 'submit' | 'reset' | 'button';
    onClick?: () => void;
    disabled?: boolean;
}