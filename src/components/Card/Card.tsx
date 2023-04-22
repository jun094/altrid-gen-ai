import cn from 'classnames';
import styles from './Card.module.scss';

type CardProps = {
  className?: string,
  fullWidth?: boolean,
  children: React.ReactNode,
}

export default function Card({ className, fullWidth = false, children }: CardProps) {
  return <div className={cn(styles.card, className, fullWidth ? styles.card_fullWidth : null)}>{children}</div>;
}
