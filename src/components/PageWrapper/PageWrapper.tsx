import styles from './PageWrapper.module.scss';

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={styles.container}>
      <main className={styles.wrapper}>{children}</main>
    </div>
  );
};

export default PageWrapper;
