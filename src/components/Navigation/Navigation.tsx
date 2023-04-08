import { useState } from 'react';

import Seo from 'components/Seo';
import CheckMyWritingHowToModal from 'components/CheckMyWritingHowToModal';
import { ReactComponent as QuestionIcon } from 'styles/assets/question.svg';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isShowHowTo, setIsShowHowTo] = useState<boolean>(false);
  const handleQuestion = () => {
    setIsShowHowTo(true);
  };
  const closeCheckMyWritingHowToModal = () => setIsShowHowTo(false);

  return (
    <>
      <Seo />

      <CheckMyWritingHowToModal
        isShow={isShowHowTo}
        onOkClick={closeCheckMyWritingHowToModal}
        onCloseClick={closeCheckMyWritingHowToModal}
      />

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
