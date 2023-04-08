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

import { ReactComponent as SendIcon } from 'styles/assets/send-white.svg';
import { ReactComponent as ErrorIcon } from 'styles/assets/error.svg';

import styles from './AiPage.module.scss';
import { ROUTE_LIST, CHECK_MY_WRITING_OPTIONS } from 'constants/common';
import { checkMyWriting } from 'modules/gptCore';
import CheckMyWritingContext from 'contexts/CheckMyWritingContext';

const LIMIT_WORDS = 10000;

function AiPage() {
  const navigate = useNavigate();
  const [textareaValue, setTextareaValue] = useState<string | undefined>(undefined);
  const [wordsNum, setWordsNum] = useState<number>(0);
  const [limitError, setLimitError] = useState<boolean>(false);
  const [selectValues, setSelectValues] = useState({
    purpose: 'General',
    style: 'General',
    tone: 'General',
  });
  const [gptLoading, setGptLoading] = useState<boolean>(false);
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
      setGptOutputText(data?.content ?? '');
      navigate(ROUTE_LIST.coach)
    } catch (error) {
      console.error(error);
      toast('An error occurred while making response.', { type: 'error' });
    }
    setGptLoading(false);
  };

  return (
    <>
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
