import { DetailedHTMLProps, FunctionComponent, HtmlHTMLAttributes } from 'react';

const Box: FunctionComponent<
  DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...props }) => (
  <div {...props} className={`box ${props.className}`}>
    {children}
  </div>
);

export default Box;
