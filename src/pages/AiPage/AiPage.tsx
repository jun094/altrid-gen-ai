import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react';
import { toast } from 'react-toastify';

import Navigation from 'components/Navigation';
import PageWrapper from 'components/PageWrapper';
import Textarea from 'components/Textarea';
import Button from 'components/Button';
import Select from 'components/Select';

import { ReactComponent as SendIcon } from 'styles/assets/send-white.svg';

import styles from './AiPage.module.scss';
import { ROUTE_LIST, CHECK_MY_WRITING_OPTIONS } from 'constants/common';
import { checkMyWriting } from 'modules/gptCore';
import CheckMyWritingContext from 'contexts/CheckMyWritingContext';

type optionType = 'purpose' | 'style' | 'tone';

function AiPage() {
  const navigate = useNavigate();
  const [textareaValue, setTextareaValue] = useState<string | undefined>(undefined);
  const [wordsNum, setWordsNum] = useState<number>(0);
  const [selectValues, setSelectValues] = useState({
    purpose: '',
    style: '',
    tone: '',
  });
  const [gptLoading, setGptLoading] = useState<boolean>(false);
  const { setUserSubmittedText, setGptOutputText, setWritingOptions } = useContext(CheckMyWritingContext);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setTextareaValue(value);
    setWordsNum(value.length);
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
                onClick={handleSelect}
              />
              <Select
                value={selectValues.style}
                label="style"
                list={CHECK_MY_WRITING_OPTIONS.style}
                onClick={handleSelect}
              />
              <Select
                value={selectValues.tone}
                label="tone"
                list={CHECK_MY_WRITING_OPTIONS.tone}
                onClick={handleSelect}
              />
            </div>
            <p className={styles.words}>{wordsNum} / 10,000</p>
          </div>

          <GrammarlyEditorPlugin clientId={process.env.REACT_APP_GRAMMARLY_CLIENT_ID}>
            <Textarea value={textareaValue} onChange={handleChange} />
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
