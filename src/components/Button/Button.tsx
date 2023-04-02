import Spinner from 'components/Spinner';
import cn from 'classnames';

import styles from './Button.module.scss';

export type ButtonColorType = 'primary' | undefined;

export type ButtonProps = {
  color?: ButtonColorType;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  color = 'primary',
  className,
  disabled = false,
  isLoading = false,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, styles[color], className)} disabled={disabled || isLoading} {...rest}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
