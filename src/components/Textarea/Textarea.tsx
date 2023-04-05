import styles from './Textarea.module.scss';

type TextareaProps = {
  placeholder?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({
  placeholder = 'Try writing in English here, or paste an existing one',
  ...rest
}: TextareaProps) => {
  return <textarea className={styles.textarea} placeholder={placeholder} {...rest}></textarea>;
};

export default Textarea;
