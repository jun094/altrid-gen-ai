import cn from 'classnames';
import styles from './Card.module.scss';

export default function Card({ className, fullWidth, children }) {
  return <div className={cn(styles.card, className, fullWidth ? styles.card_fullWidth : null)}>{children}</div>;
}
