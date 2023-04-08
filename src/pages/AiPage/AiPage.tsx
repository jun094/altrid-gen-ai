import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
import { toast } from 'react-toastify';
import cn from 'classnames';

import Navigation from 'components/Navigation';
import PageWrapper from 'components/PageWrapper';
import Textarea from 'components/Textarea';
import Button from 'components/Button';
import Select from 'components/Select';
import Modal from 'components/Modal';

import { ReactComponent as SendIcon } from 'styles/assets/send-white.svg';
import { ReactComponent as ErrorIcon } from 'styles/assets/error.svg';
import { ReactComponent as FailImage } from 'styles/assets/error-image.svg';

import { ROUTE_LIST, CHECK_MY_WRITING_OPTIONS } from 'constants/common';
import { checkMyWriting } from 'modules/gptCore';
import CheckMyWritingContext from 'contexts/CheckMyWritingContext';

import styles from './AiPage.module.scss';

const LIMIT_WORDS = 10000;

function AiPage() {
  const navigate = useNavigate();
  const [textareaValue, setTextareaValue] = useState<string | undefined>(undefined);
  const [wordsNum, setWordsNum] = useState<number>(0);
  const [limitError, setLimitError] = useState<boolean>(false);
  const [gptError, setGptError] = useState<boolean>(false);
  const [gptLoading, setGptLoading] = useState<boolean>(false);

  const [selectValues, setSelectValues] = useState({
    purpose: 'General',
    style: 'General',
    tone: 'General',
  });
  const { setUserSubmittedText, setGptOutputText, setWritingOptions } = useContext(CheckMyWritingContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    const { length } = value;

    if (length <= LIMIT_WORDS) {
      setTextareaValue(value);
      setWordsNum(length);
      setLimitError(false);
    } else {
      setLimitError(true);
    }
  };
  const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    const { dataset } = e.target as HTMLElement;
    const { id, label = '' } = dataset;

    setSelectValues({
      ...selectValues,
      [label]: id,
    });
  };

  const getCheckMyWriting = async () => {
    setGptLoading(true);
    setUserSubmittedText(textareaValue ?? '');
    setWritingOptions({
      writingPurpose: selectValues.purpose,
      writingStyle: selectValues.style,
      writingTone: selectValues.tone,
    });
    try {
      const data = await checkMyWriting({
        text: textareaValue,
        options: {
          writingPurpose: selectValues.purpose,
          writingStyle: selectValues.style,
          writingTone: selectValues.tone,
        },
      });

      setGptError(false);
      setGptOutputText(data?.content ?? '');
      navigate(ROUTE_LIST.coach);
    } catch (error) {
      setGptError(true);
      // eslint-disable-next-line no-console
      console.error(error);
    }
    setGptLoading(false);
  };

  return (
    <>
      <Modal isShow={gptLoading || gptError} className={styles.modal}>
        {gptLoading && !gptError ? (
          <>
            <div className={styles.modalImage}>
              <img src="/loading-animation.png" alt="loading" />
            </div>
            <p className={cn(styles.modalText, styles.typingEffect)}>
              AI is reviewing your english composition now. This may take up to several minutes.
            </p>
          </>
        ) : (
          <>
            <div className={styles.modalImage}>
              <FailImage />
            </div>

            <p className={styles.modalText}>
              Failed to load GPT module.
              <br /> Please try again later.
            </p>

            <div className={styles.modalButton}>
              <Button onClick={() => setGptError(false)}>OK</Button>
            </div>
          </>
        )}
      </Modal>
      <Navigation />
      <PageWrapper>
        <section className={styles.header}>
          <h1 className={styles.title}>Let&apos;s get your writing revised!</h1>
        </section>

        <section className={styles.body}>
          <div className={styles.forms}>
            <div className={styles.selects}>
              <Select
                value={selectValues.purpose}
                label="purpose"
                list={CHECK_MY_WRITING_OPTIONS.purpose}
                innserClassName={styles.select}
                onClick={handleSelect}
              />
              <Select
                value={selectValues.style}
                label="style"
                list={CHECK_MY_WRITING_OPTIONS.style}
                innserClassName={styles.select}
                onClick={handleSelect}
              />
              <Select
                value={selectValues.tone}
                label="tone"
                list={CHECK_MY_WRITING_OPTIONS.tone}
                innserClassName={styles.select}
                onClick={handleSelect}
              />
            </div>
            <p className={cn(styles.words, limitError && styles.words_error)}>
              {limitError && <ErrorIcon className={styles.errorIcon} />}
              {wordsNum} / {LIMIT_WORDS.toLocaleString('ko-KR')}
            </p>
          </div>

          <GrammarlyEditorPlugin clientId={process.env.REACT_APP_GRAMMARLY_CLIENT_ID}>
            <Textarea autoFocus value={textareaValue} onChange={handleChange} className={styles.textarea_web} />
            <Textarea
              height={200}
              // autoFocus
              value={textareaValue}
              onChange={handleChange}
              className={styles.textarea_mobile}
            />
          </GrammarlyEditorPlugin>
        </section>

        <section className={styles.footer}>
          <Button disabled={wordsNum === 0} icon={SendIcon} isLoading={gptLoading} onClick={getCheckMyWriting}>
            SUBMIT
          </Button>
        </section>
      </PageWrapper>
    </>
  );
}

export default AiPage;
