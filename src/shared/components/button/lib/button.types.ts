export interface ButtonProps {
  onClick?: () => void;
  className?: string;
  variant?:
    | 'link'
    | 'link-inverted'
    | 'solid'
    | 'outline'
    | 'ghost'
    | 'outline-inverted'
    | 'ghost-inverted';
  children: string | React.ReactElement;
  type?: 'submit' | 'button';
}
