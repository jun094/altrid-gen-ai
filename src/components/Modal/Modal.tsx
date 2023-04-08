import cn from 'classnames';
import { AppPortal } from 'AppPortal';
import styles from './Modal.module.scss';

type ModalProps = {
  isShow?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Modal = ({ isShow = false, className, children }: ModalProps) => {
  return (
    <>
      {isShow && (
        <AppPortal.Consumer>
          <div className={styles.container}>
            <div className={cn(styles.modal, className)}>{children}</div>
          </div>
        </AppPortal.Consumer>
      )}
    </>
  );
};

export default Modal;
