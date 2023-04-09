import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Seo from 'components/Seo';
import CheckMyWritingHowToModal from 'components/CheckMyWritingHowToModal';

import { ReactComponent as QuestionIcon } from 'styles/assets/question.svg';
import { ReactComponent as InsertTextIcon } from 'styles/assets/insert-text.svg';

import CheckMyWritingContext from 'contexts/CheckMyWritingContext';
import { SAMPLE_TEXT } from 'constants/sampleText';
import { ROUTE_LIST } from 'constants/common';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isShowHowTo, setIsShowHowTo] = useState<boolean>(false);
  const { setUserSubmittedText } = useContext(CheckMyWritingContext);
  const location = useLocation();

  const handleQuestion = () => {
    setIsShowHowTo(true);
  };
  const closeCheckMyWritingHowToModal = () => setIsShowHowTo(false);
  const handleInsertText = () => {
    setUserSubmittedText(SAMPLE_TEXT);
  };

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

        <ul className={styles.utils}>
          {location?.pathname === ROUTE_LIST.ai && (
            <li>
              <button className={styles.insertText} onClick={handleInsertText}>
                <span className={styles.insertTextIcon}>
                  <InsertTextIcon />
                </span>
                <p className={styles.insertTextDesc_mobile}>Sample Text</p>
                <p className={styles.insertTextDesc_web}>Generate sample text</p>
              </button>
            </li>
          )}

          <li className={styles.question} onClick={handleQuestion}>
            <QuestionIcon />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
