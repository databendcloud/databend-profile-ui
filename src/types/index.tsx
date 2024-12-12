export interface ICommonProps {
  style?: React.CSSProperties;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode[] | React.ReactNode;
}
