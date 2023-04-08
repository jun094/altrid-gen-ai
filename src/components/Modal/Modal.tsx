import { AppPortal } from 'AppPortal';
import styles from './Modal.module.scss';

type ModalProps = {
  isShow?: boolean;
  children: React.ReactNode;
};

const Modal = ({ isShow = false, children }: ModalProps) => {
  return (
    <>
      {isShow && (
        <AppPortal.Consumer>
          <div className={styles.container}>
            <div className={styles.modal}>{children}</div>
          </div>
        </AppPortal.Consumer>
      )}
    </>
  );
};

export default Modal;
