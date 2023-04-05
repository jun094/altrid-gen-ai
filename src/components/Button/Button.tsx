import Spinner from 'components/Spinner';
import cn from 'classnames';

import styles from './Button.module.scss';

export type ButtonColorType = 'primary' | undefined;

export type ButtonProps = {
  color?: ButtonColorType;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  color = 'primary',
  className,
  disabled = false,
  isLoading = false,
  icon: Icon,
  children,

  ...rest
}: ButtonProps) => {
  return (
    <button className={cn(styles.button, styles[color], className)} disabled={disabled || isLoading} {...rest}>
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
