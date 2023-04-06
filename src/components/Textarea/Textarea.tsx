import styles from './Textarea.module.scss';

type TextareaProps = {
  placeholder?: string;
  minHeight?: string | number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({
  placeholder = 'Try writing anythings with specific purposes in English here, or paste an existing one to revise.',
  minHeight = 460,
  ...rest
}: TextareaProps) => {
  return <textarea style={{ minHeight }} className={styles.textarea} placeholder={placeholder} {...rest}></textarea>;
};

export default Textarea;
