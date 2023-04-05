import cn from 'classnames';

import styles from './PageWrapper.module.scss';

type PageWrapperProps = {
  className?: string;
  innerClassName?: string;
  maxWidth?: number | string;
  children: React.ReactNode;
};

const PageWrapper = ({ className, innerClassName, maxWidth = 780, children }: PageWrapperProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <main style={{ maxWidth }} className={cn(styles.wrapper, innerClassName)}>
        {children}
      </main>
    </div>
  );
};

export default PageWrapper;
