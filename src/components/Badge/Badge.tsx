import styles from './Badge.module.scss';

type BadgeProps = { children: React.ReactNode };

const Badge = ({ children }: BadgeProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Badge;
