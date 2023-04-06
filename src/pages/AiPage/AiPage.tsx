import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navigation from 'components/Navigation';
import PageWrapper from 'components/PageWrapper';
import Textarea from 'components/Textarea';
import Button from 'components/Button';
import Select from 'components/Select';

import { ReactComponent as SendIcon } from 'styles/assets/send-white.svg';

import styles from './AiPage.module.scss';
import { ROUTE_LIST } from 'constants/common';

function AiPage() {
  const navigate = useNavigate();
  const [textareaValue, setTextareaValue] = useState<string | undefined>(undefined);
  const [wordsNum, setWordsNum] = useState<number>(0);
  const [selectValues, setSelectValues] = useState({
    purpose: '',
    style: '',
    tone: '',
  });

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
            <p className={styles.words}>{wordsNum} / 10,000</p>
          </div>

          <Textarea value={textareaValue} onChange={handleChange} />
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
