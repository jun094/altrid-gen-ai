import { useState } from 'react';

import Navigation from 'components/Navigation';
import PageWrapper from 'components/PageWrapper';
import Textarea from 'components/Textarea';

import styles from './AiPage.module.scss';

function AiPage() {
  const [value, setValue] = useState<string | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setValue(value);
  };
  return (
    <>
      <Navigation />
      <PageWrapper>
        <section className={styles.titleSection}>
          <h1 className={styles.title}>Let&apos;s write English</h1>
          <p className={styles.subTitle}>AI tutor to improve your English writing skills</p>
        </section>

        <section className={styles.inputSection}>
          <Textarea value={value} onChange={handleChange} />
        </section>
      </PageWrapper>
    </>
  );
}

export default AiPage;
