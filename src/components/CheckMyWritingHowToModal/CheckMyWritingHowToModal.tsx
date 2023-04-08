import Button from 'components/Button';
import Modal from 'components/Modal';

import styles from './CheckMyWritingHowToModal.module.scss';

const STEP1_IAMGE = '/assets/step1-image.png';
const STEP2_IAMGE = '/assets/step2-image.png';
const STEP3_IAMGE = '/assets/step3-image.png';

type StepItemProps = {
  stepImage: string;
  stepTitle: string;
  stepText?: string;
  stepDescription?: string;
};

const StepItem = ({ stepImage, stepTitle, stepText, stepDescription }: StepItemProps) => {
  return (
    <div className={styles.stepItem}>
      <div className={styles.stepItem_image}>
        <img src={stepImage} alt="step" />
      </div>
      <div className={styles.stepItem_textContent}>
        <div className={styles.stepItem_title}>{stepTitle}</div>
        <div className={styles.stepItem_text}>{stepText}</div>
        <div className={styles.stepItem_description}>{stepDescription}</div>
      </div>
    </div>
  );
};

type CheckMyWritingHowToModalProps = {
  isShow: boolean;
  onCloseClick?: React.MouseEventHandler<HTMLElement>;
  onOkClick?: React.MouseEventHandler<HTMLElement>;
};

function CheckMyWritingHowToModal({ isShow, onCloseClick, onOkClick }: CheckMyWritingHowToModalProps) {
  return (
    <Modal isShow={isShow} className={styles.checkMyWritingHowToModalContainer}>
      <div className={styles.checkMyWritingHowToModal}>
        <div className={styles.checkMyWritingHowToModal_header}>
          <div className={styles.checkMyWritingHowToModal_closeIcon} onClick={onCloseClick}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.2708 16C15.4565 16 15.6415 15.9273 15.783 15.7857C16.0667 15.502 16.0667 15.0404 15.783 14.7567L9.02844 8.0013L15.7869 1.24136C16.0706 0.957635 16.0706 0.496022 15.7869 0.212302C15.5032 -0.0714183 15.0417 -0.0714183 14.758 0.212302L7.99951 6.97159L1.24104 0.216847C0.958007 -0.0668736 0.495801 -0.0668736 0.212764 0.216847C-0.0709214 0.499918 -0.0709214 0.96218 0.212764 1.24525L6.97123 8.00065L0.216659 14.7599C-0.0670264 15.0437 -0.0670264 15.5053 0.216659 15.789C0.358177 15.9266 0.543839 16 0.728851 16C0.913864 16 1.09953 15.9273 1.24104 15.7857L7.99951 9.03035L14.758 15.7896C14.8995 15.9273 15.0852 16.0006 15.2702 16.0006L15.2708 16Z"
                fill="#8C8C8C"
              />
            </svg>
          </div>
          <div>How to use</div>
        </div>

        <div className={styles.checkMyWritingHowToModal_content}>
          <StepItem
            stepTitle="STEP 1"
            stepText="Get the writing ready in eletrical form of document!
Or, you can also start typing right away!"
            stepDescription="It could be anything from writing assignments from your history class, an e-mail for your teacher asking something particular with formal and polite tone."
            stepImage={STEP1_IAMGE}
          />
          <StepItem stepTitle="STEP 2" stepText="Simply copy and paste it!" stepImage={STEP2_IAMGE} />
          <StepItem
            stepTitle="STEP 3"
            stepText="Last but not least! Click the submit button and let your AI writing coach to do the work!"
            stepImage={STEP3_IAMGE}
          />
        </div>
        <div className={styles.checkMyWritingHowToModal_contact}>
          <p>
            Please feel free to contact us for any inquiries.
            <br />
            e-mail: <span className={styles.checkMyWritingHowToModal_contactEmail}>rikjeon94@optmier.com</span>
          </p>
        </div>

        <div className={styles.checkMyWritingHowToModal_bottom}>
          <Button color="primary" onClick={onOkClick}>
            OK
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CheckMyWritingHowToModal;
