import Seo from 'components/Seo';
import { ReactComponent as QuestionIcon } from 'styles/assets/question.svg';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const handleQuestion = () => {
    console.log('click question !');
  };

  return (
    <>
      <Seo />
      <nav className={styles.container}>
        <a href="/" className={styles.logoLink}>
          <img src="/logo.png" className={styles.logo} />
          <img src="/logo-text.png" className={styles.logoText} />
        </a>

        <span className={styles.question} onClick={handleQuestion}>
          <QuestionIcon />
        </span>
      </nav>
    </>
  );
};

export default Navigation;
