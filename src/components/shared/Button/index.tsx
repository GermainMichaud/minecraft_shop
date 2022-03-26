import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from 'react';

const Button: FunctionComponent<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    title: string;
  }
> = ({ title, ...props }) => <button {...props}>{title}</button>;

export default Button;
