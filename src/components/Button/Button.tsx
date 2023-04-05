import Spinner from 'components/Spinner';
import cn from 'classnames';

import styles from './Button.module.scss';

export type ButtonStyleType = 'primary' | 'outline' | undefined;
export type ButtonSizeType = 'md' | 'lg';

export type ButtonProps = {
  style?: ButtonStyleType;
  size?: ButtonSizeType;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  style = 'primary',
  size = 'lg',
  className,
  disabled = false,
  isLoading = false,
  icon: Icon,
  children,

  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.container, styles[style], styles[size], className)}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.wrapper}>
          {Icon && <Icon />}
          {children}
        </div>
      )}
    </button>
  );
};

export default Button;
