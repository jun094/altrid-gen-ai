import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import Navigation from 'components/Navigation';
import PageWrapper from 'components/PageWrapper';
import Textarea from 'components/Textarea';
import Button from 'components/Button';
import Select from 'components/Select';

import { ReactComponent as SendIcon } from 'styles/assets/send-white.svg';
import { ReactComponent as ErrorIcon } from 'styles/assets/error.svg';

import styles from './AiPage.module.scss';
import { ROUTE_LIST } from 'constants/common';

const LIMIT_WORDS = 10;

function AiPage() {
  const navigate = useNavigate();
  const [textareaValue, setTextareaValue] = useState<string | undefined>(undefined);
  const [wordsNum, setWordsNum] = useState<number>(0);
  const [limitError, setLimitError] = useState<boolean>(false);
  const [selectValues, setSelectValues] = useState({
    purpose: '',
    style: '',
    tone: '',
  });

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
                list={['list1', 'list2', 'list3']}
                onClick={handleSelect}
              />
              <Select
                value={selectValues.style}
                label="style"
                list={['list1', 'list2', 'list3']}
                onClick={handleSelect}
              />
              <Select
                value={selectValues.tone}
                label="tone"
                list={['list1', 'list2', 'list3']}
                onClick={handleSelect}
              />
            </div>
            <p className={cn(styles.words, limitError && styles.words_error)}>
              {limitError && <ErrorIcon className={styles.errorIcon} />}
              {wordsNum} / {LIMIT_WORDS.toLocaleString('ko-KR')}
            </p>
          </div>

          <Textarea autoFocus value={textareaValue} onChange={handleChange} />
        </section>

        <section className={styles.footer}>
          <Button disabled={wordsNum === 0} icon={SendIcon} onClick={() => navigate(ROUTE_LIST.coach)}>
            SUBMIT
          </Button>
        </section>
      </PageWrapper>
    </>
  );
}

export default AiPage;
