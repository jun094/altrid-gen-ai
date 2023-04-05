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
  const [value, setValue] = useState<string | undefined>(undefined);
  const [wordsNum, setWordsNum] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setValue(value);
    setWordsNum(value.length);
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
              <Select label="purpose" list={['list1', 'list2', 'list3']} />
              <Select label="style" list={['list1', 'list2', 'list3']} />
              <Select label="tone" list={['list1', 'list2', 'list3']} />
            </div>
            <p className={styles.words}>{wordsNum} / 10,000</p>
          </div>

          <Textarea value={value} onChange={handleChange} />
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
