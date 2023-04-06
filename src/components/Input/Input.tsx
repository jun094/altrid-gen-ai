import { forwardRef, Ref } from 'react';
import cn from 'classnames';
import type { InputStatusType } from './Input.type';

import styles from './Input.module.scss';

type InputProps = {
  /**
   * input의 default | error 상황의 스타일링을 결정합니다.
   */
  status?: InputStatusType;
  /**
   * input type과 상관없이, 숫자 키패드를 노출 시킵니다.
   */
  isNumericKeyPad?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = (
  { type, status = 'default', isNumericKeyPad = false, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>
) => {
  const defaultStyle = styles.input_default;
  const errorStyle = styles.input_error;

  const handleSendButton = () => {
    console.log('click!');
  };
  
  return (
    <span className={styles.container}>
      <input
        type={type}
        ref={ref}
        inputMode={isNumericKeyPad || type === 'number' ? 'numeric' : undefined}
        className={cn(styles.input, { [defaultStyle]: status === 'default', [errorStyle]: status === 'error' })}
        {...rest}
      />
      <button onClick={handleSendButton}>
        <img src="/assets/send-icon.png" />
      </button>
    </span>
  );
};

export default forwardRef(Input);
