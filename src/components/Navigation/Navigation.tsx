import Seo from 'components/Seo';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <>
      <Seo />
      <nav className={styles.container}>
        <a href="/" className={styles.logoLink}>
          <img src="/logo.png" className={styles.logo} />
          <img src="/logo-text.png" className={styles.logoText} />
        </a>
      </nav>
    </>
  );
};

export default Navigation;
