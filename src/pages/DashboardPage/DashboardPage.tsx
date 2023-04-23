import cn from 'classnames';
import Card from 'components/Card';
import Navigation from 'components/Navigation';
import PageWrapper from 'components/PageWrapper';
import { ROUTE_LIST } from 'constants/common';

import { ReactComponent as CardDropdownIcon } from 'styles/assets/card-dropdown-icon.svg';
import { ReactComponent as PersonalCardDummies } from 'styles/assets/personal-card-dummies.svg';
import { ReactComponent as MyGrowthGraphDummy } from 'styles/assets/my-growth-graph-dummy.svg';
import { ReactComponent as MyGrowthCardCalendarIcon } from 'styles/assets/my-growth-card-calendar.svg';
import { ReactComponent as WritingRevisedCardItemIcon } from 'styles/assets/writing-revised-card-item.svg';
import { ReactComponent as ArrowRightIcon } from 'styles/assets/arrow-right.svg';

import EssayImage from 'styles/assets/img_essay_3d.png';
import SentenceImage from 'styles/assets/img_sentence_3d.png';
import WordImage from 'styles/assets/img_word_3d.png';
import WritingImage from 'styles/assets/img_writing_3d.png';

import styles from './DashboardPage.module.scss';

const CardAvatar = () => {
  return <div className={styles.cardAvatar} />;
};

const CardMenuButton = () => {
  return <CardDropdownIcon className={styles.cardMenuButton} />;
};

type ProgressBarType = {
  color?: string;
  title?: string;
  percentage?: number;
};

const ProgressBar = ({ color = 'purple', title, percentage = 0 }: ProgressBarType) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBarHeader}>
        <div className={styles.progressBarTitle}>{title}</div>
        <div className={cn(styles.progressBarPercentage, styles[`progressBarPercentage_${color}`])}>{percentage}%</div>
      </div>
      <div className={cn(styles.progressBarBackground, styles[`progressBarBackground_${color}`])}>
        <div
          className={cn(styles.progressBarGauge, styles[`progressBarGauge_${color}`])}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

type WritingRevisedItem = {
  title?: string;
  dateString?: string;
};

const WritingRevisedItem = ({ title, dateString }: WritingRevisedItem) => {
  return (
    <div className={styles.writingRevisedItem}>
      <WritingRevisedCardItemIcon />
      <div className={styles.writingRevisedItemTitle}>{title}</div>
      <div className={styles.writingRevisedItemDateString}>{dateString}</div>
    </div>
  );
};

type MainCardItemProps = {
  title?: string;
  description?: string;
  image?: string;
  isActive?: boolean;
  link?: string;
};

const MainCardItem = ({ title, description, image, isActive = false, link }: MainCardItemProps) => {
  return (
    <a href={link} className={cn(styles.mainCardItem, isActive ? styles.mainCardItem_isActive : null)}>
      <img className={styles.mainCardItemImage} src={image} />
      <div className={styles.mainCardItemTextContent}>
        <div className={cn(styles.mainCardItemTitle, isActive ? styles.mainCardItemTitle_isActive : null)}>{title}</div>
        <div className={styles.mainCardItemDescription}>{description}</div>
        <div className={styles.mainCardItemBottom}>
          {isActive && (
            <div className={styles.mainCardItemBottomButton}>
              <ArrowRightIcon />
            </div>
          )}
          <div className={cn(styles.mainCardItemBottomText, isActive ? styles.mainCardItemBottomText_isActive : null)}>
            {isActive ? 'Create new' : 'Comming soon'}
          </div>
        </div>
      </div>
    </a>
  );
};

export default function DashboardPage() {
  return (
    <>
      <Navigation />
      <PageWrapper className={styles.container} maxWidth={928}>
        <div className={styles.cardContainer}>
          <div className={styles.cardSection}>
            <div className={cn(styles.cardCluster, styles.cardCluster_fullWidth)}>
              <Card fullWidth>
                <div className={cn(styles.cardHeading, styles.cardHeading_lg)}>English Writing Training</div>
                <div className={styles.mainCardItemSection}>
                  <MainCardItem
                    link={ROUTE_LIST.ai}
                    title="AI-generated Writing Revision and Coaching"
                    image={WritingImage}
                    description="In addition to correcting the basic grammar and spelling in your writing, a newly revised version of writing will be recommended according to the specific purpose, style, and tone of your tasks related to various fields."
                    isActive
                  />
                  <MainCardItem
                    title="Grow Sentence Building Skills"
                    image={SentenceImage}
                    description="To advance the writing skills, understanding the fundamental structure and purpose of writing sentences comes first. Advance writing skills by experiencing AI-based in-depth sentence writing lessons to boost your writing skills."
                  />
                  <MainCardItem
                    title="Learn Composing Advanced Essays"
                    image={EssayImage}
                    description="Depending on the use of writing, learn how to write better essays through subject-specific essay training courses. You will be able to develop the overall writing skills suitable for the purpose, style, and tone."
                  />
                  <MainCardItem
                    title="Practice Daily Vocabulary Words"
                    image={WordImage}
                    description="Not only expand the depth and range of vocabulary skills but also advance them by creating sentences using the daily recommended words every day."
                  />
                </div>
              </Card>
            </div>
            <div className={styles.cardCluster}>
              <Card className={styles.cardMorePadding}>
                <CardMenuButton />
                <CardAvatar />
                <div className={styles.personalCardHeader}>
                  <div className={cn(styles.cardHeading, styles.cardHeading_md)}>Cindy Anderson</div>
                  <p className={styles.cardParagraph}>Middle Grade</p>
                </div>
                <div className={styles.personalCardScores}>
                  <div className={styles.personalCardScoresItem}>
                    10,247
                    <p className={styles.cardParagraph}>Score</p>
                  </div>
                  <div className={styles.personalCardScoresItem}>
                    1,765
                    <p className={styles.cardParagraph}>Ranking</p>
                  </div>
                </div>
                <div className={styles.personalCardBottomActions}>
                  <PersonalCardDummies />
                </div>
              </Card>
              <Card className={cn(styles.cardSeparator, styles.cardMorePadding)}>
                <CardMenuButton />
                <div className={styles.englishWritingCardHeader}>
                  <div className={cn(styles.cardHeading, styles.cardHeading_sm)}>English Writing</div>
                  <p className={styles.cardParagraph}>My English skills are growing by learning to write every day.</p>
                </div>
                <div className={styles.englishWritingCardGraphSection}>
                  <ProgressBar color="purple" title="Writing" percentage={84} />
                  <ProgressBar color="yellow" title="Making Sentences" percentage={65} />
                  <ProgressBar color="blue" title="Essay Writing" percentage={46} />
                  <ProgressBar color="cyan" title="Put Words Together" percentage={37} />
                </div>
              </Card>
            </div>
          </div>
          <div className={styles.cardSection}>
            <div className={styles.cardCluster}>
              <Card>
                <CardMenuButton />
                <div className={cn(styles.cardHeading, styles.cardHeading_sm)}>Writing Revised</div>
                <div className={styles.writingRevisedCardListSection}>
                  <WritingRevisedItem title="Writing Practice: Report" dateString="5/1" />
                  <WritingRevisedItem title="Writing Practice: Essay Exam" dateString="5/3" />
                  <WritingRevisedItem title="Writing Practice: Email Form" dateString="5/7" />
                  <WritingRevisedItem title="Writing Practice: Diary" dateString="5/8" />
                  <WritingRevisedItem title="Writing Practice: Presentation" dateString="5/12" />
                </div>
              </Card>
            </div>
            <div className={cn(styles.cardCluster, styles.cardCluster_fullWidth)}>
              <Card fullWidth>
                <div className={styles.myGrowthCardHeader}>
                  <div className={cn(styles.cardHeading, styles.cardHeading_sm)}>My Growth</div>
                  <div className={styles.myGrowthCardDateAction}>
                    <div className={styles.myGrowthCardDateActionText}>Monthly activity history</div>
                    <div className={styles.myGrowthCardDatePicker}>
                      May 2023
                      <MyGrowthCardCalendarIcon />
                    </div>
                  </div>
                </div>
                <div className={styles.myGrowthCardGraphSection}>
                  <MyGrowthGraphDummy />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
