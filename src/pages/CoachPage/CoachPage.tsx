import Navigation from 'components/Navigation';
import PageWrapper from 'components/PageWrapper';

import Textarea from 'components/Textarea';

import styles from './CoachPage.module.scss';

const SUBMITTED =
  'Topic: Have you ever seen someone being bullied? What can you do to help them? When it comes to decide whether we stop bullies from hurting someone, it can be very complicated to act. Some people think freedom means that they can do anything they want, however rules are to not laugh or tease at people because of thier behaviors and looks. I strongly belive that freedom cannot allow people to do whatever they want to do if they hurt other people. I will personally help them if I see someone being bullied. First, freedom must not allow people to do whatever they want to. The morality is to respect, be heart-warming, and to care about people. When it comes to the situation when we need to decide the importance of freedom or morality over another, we have to be clear about what we need to choose and to become. For example, if there are too much freedom in the world, it will become enourmous disaster where people will steal valuable things, trash things everywhere, and eat others’ food.';

function CoachPage() {
  return (
    <>
      <Navigation />
      <PageWrapper innerClassName={styles.container} maxWidth={1226}>
        {/* 사용자가 입력한 textarea */}
        <section className={styles.submittedTextarea}>
          <Textarea value={SUBMITTED} disabled />
        </section>

        {/* 편집 가능한 textarea */}
        <section className={styles.editingTextarea}>
          <Textarea value={SUBMITTED} readOnly />
        </section>
      </PageWrapper>
    </>
  );
}

export default CoachPage;
