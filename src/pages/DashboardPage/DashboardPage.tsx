import cn from 'classnames';
import Card from 'components/Card';
import Navigation from 'components/Navigation';
import PageWrapper from 'components/PageWrapper';
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
                    link="/"
                    title="Writing Correction and Coaching"
                    image={WritingImage}
                    description="In addition to checking the grammar of the written composition, corrections are made according to the purpose, style, and tone."
                    isActive
                  />
                  <MainCardItem
                    title="Sentence Making Training"
                    image={SentenceImage}
                    description="Understand the structure of sentence writing, and provide in-depth sentence writing training and corrections."
                  />
                  <MainCardItem
                    title="Write a Topic Essay"
                    image={EssayImage}
                    description="Through subject-specific essay training, students practice English writing suitable for the purpose."
                  />
                  <MainCardItem
                    title="Combining Suggested Words"
                    image={WordImage}
                    description="Memorize today's recommended English words, and compose new sentences by combining words."
                  />
                </div>
              </Card>
            </div>
            <div className={styles.cardCluster}>
              <Card>
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
              <Card className={styles.cardSeparator}>
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
                <div className={styles.myGrowthCardDateAction}>
                  <div className={styles.myGrowthCardDateActionText}>Monthly activity history</div>
                  <div className={styles.myGrowthCardDatePicker}>
                    May 2023
                    <MyGrowthCardCalendarIcon />
                  </div>
                </div>
                <div className={cn(styles.cardHeading, styles.cardHeading_sm)}>My Growth</div>
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
