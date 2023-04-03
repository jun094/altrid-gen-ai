import { useState } from 'react';

import Navigation from 'components/Navigation';
import PageWrapper from 'components/PageWrapper';
import Textarea from 'components/Textarea';

import styles from './AiPage.module.scss';
import Button from 'components/Button';
import Select from 'components/Select';

function AiPage() {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setValue(value);
  };
  return (
    <>
      <Navigation />
      <PageWrapper>
        <section className={styles.header}>
          <h1 className={styles.title}>Let&apos;s get your writing revised!</h1>
        </section>

        <section className={styles.body}>
          <div className={styles.selects}>
            <Select label="purpose" list={['list1', 'list2', 'list3']} className={styles.select} />
            <Select label="style" list={['list1', 'list2', 'list3']} className={styles.select} />
            <Select label="tone" list={['list1', 'list2', 'list3']} className={styles.select} />
          </div>

          <Textarea value={value} onChange={handleChange} />
        </section>

        <section className={styles.footer}>
          <Button disabled={disabled}>SUBMIT</Button>
        </section>
      </PageWrapper>
    </>
  );
}

export default AiPage;
