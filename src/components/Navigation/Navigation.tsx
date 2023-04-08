import Seo from 'components/Seo';
import { ReactComponent as QuestionIcon } from 'styles/assets/question.svg';

import styles from './Navigation.module.scss';
import Modal from 'components/Modal';
import CheckMyWritingHowToModal from 'pages/CheckMyWritingHowToModal';
import { useState } from 'react';

const Navigation = () => {
  const [isShowHowTo, setIsShowHowTo] = useState<boolean>(false);
  const handleQuestion = () => {
    setIsShowHowTo(true);
  };
  const closeCheckMyWritingHowToModal = () => setIsShowHowTo(false);

  return (
    <>
      <Seo />
      <Modal className={styles.checkMyWritingHowToModal} isShow={isShowHowTo}>
        <CheckMyWritingHowToModal
          onOkClick={closeCheckMyWritingHowToModal}
          onCloseClick={closeCheckMyWritingHowToModal}
        />
      </Modal>
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
