import { toast } from 'react-toastify';

import Navigation from 'components/Navigation';
import PageWrapper from 'components/PageWrapper';

import Textarea from 'components/Textarea';

import styles from './CoachPage.module.scss';
import Badge from 'components/Badge';
import Button from 'components/Button';

import { ReactComponent as CopyIcon } from 'styles/assets/clipboard.svg';
import { ReactComponent as SendIcon } from 'styles/assets/send-white.svg';

import useCopyToClipboard from 'hooks/useCopyToClipboard';
import { useContext, useEffect } from 'react';
import CheckMyWritingContext from 'contexts/CheckMyWritingContext';
import { useNavigate } from 'react-router-dom';
import { ROUTE_LIST } from 'constants/common';

function CoachPage() {
  const navigate = useNavigate();
  const [_, copy] = useCopyToClipboard();
  const {
    userSubmittedText,
    gptOutputText,
    writingOptions: { writingPurpose, writingStyle, writingTone },
    setUserSubmittedText,
    setGptOutputText,
    setWritingOptions,
  } = useContext(CheckMyWritingContext);

  const handleCopy = () => {
    copy(gptOutputText);
    toast('copied!');
  };

  const goToInitPage = () => {
    setUserSubmittedText(''),
    setGptOutputText(''),
    setWritingOptions({writingPurpose: 'General', writingStyle: 'General', writingTone: 'General'}),
    navigate(ROUTE_LIST.ai);
  }

  useEffect(() => {
    if (!userSubmittedText || !gptOutputText) {
      navigate(ROUTE_LIST.ai);
    }
  }, [userSubmittedText, gptOutputText]);
  return (
    <>
      <Navigation />
      <PageWrapper innerClassName={styles.container} maxWidth={1226}>
        <section className={styles.textareaSection}>
          {/* 사용자가 입력한 textarea */}
          <div className={styles.textarea}>
            <ul className={styles.badges}>
              <li>
                <Badge>Purpose: {writingPurpose}</Badge>
              </li>
              <li>
                <Badge>Style: {writingStyle}</Badge>
              </li>
              <li>
                <Badge>Tone: {writingTone}</Badge>
              </li>
            </ul>

            <Textarea value={userSubmittedText} minHeight={540} disabled />
          </div>

          {/* 편집 가능한 textarea */}
          <div className={styles.textarea}>
            <div className={styles.editedHeader}>
              <h6 className={styles.editedTitle}>AI writing coach</h6>

              <Button size="md" style="outline" icon={CopyIcon} onClick={handleCopy}>
                Copy
              </Button>
            </div>
            <Textarea value={gptOutputText} minHeight={540} readOnly />
          </div>
        </section>

        <section className={styles.footer}>
          <Button icon={SendIcon} onClick={goToInitPage}>TRY AGAIN</Button>
        </section>
      </PageWrapper>
    </>
  );
}

export default CoachPage;
