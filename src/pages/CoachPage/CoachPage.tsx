import { toast } from 'react-toastify';
import cn from 'classnames';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    toast.success('Copied. Paste it anywhere you want!', {
      theme: 'colored',
      // icon: false,
      style: { backgroundColor: 'var(--success)', width: '320px' },
    });
  };

  const goToInitPage = () => {
    setUserSubmittedText(''),
      setGptOutputText(''),
      setWritingOptions({ writingPurpose: 'General', writingStyle: 'General', writingTone: 'General' }),
      navigate(ROUTE_LIST.ai);
  };

  useEffect(() => {
    if (!userSubmittedText || !gptOutputText) {
      // navigate(ROUTE_LIST.ai);
    }
    scrollTo(0, 0);
  }, [userSubmittedText, gptOutputText]);

  return (
    <>
      <Navigation />
      <PageWrapper innerClassName={styles.container} maxWidth={1226}>
        <section className={styles.textareaSection}>
          {/* 사용자가 입력한 textarea */}
          <div className={cn(styles.textarea, styles.inputsTextarea)}>
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

            <Textarea value={userSubmittedText} height={540} disabled />
          </div>

          {/* ChatGPT에 편집된 textarea */}
          <div className={cn(styles.textarea, styles.editedTextarea)}>
            <div className={styles.editedHeader}>
              <h6 className={styles.editedTitle}>AI writing coach</h6>

              <Button size="md" style="outline" icon={CopyIcon} onClick={handleCopy}>
                Copy
              </Button>
            </div>

            <Textarea value={gptOutputText} height={540} readOnly className={styles.editedTextarea_web} />
            <Textarea value={gptOutputText} readOnly className={styles.editedTextarea_tablet} />
          </div>
        </section>

        <section className={styles.footer}>
          <Button icon={SendIcon} onClick={goToInitPage}>
            TRY AGAIN
          </Button>
        </section>
      </PageWrapper>
    </>
  );
}

export default CoachPage;
