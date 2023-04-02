import styles from './Textarea.module.scss';

type TextareaProps = {
  placeholder?: 'Try writing in English here, or paste an existing one';
  value?: string;
  onChange: any;
};

const Textarea = ({ placeholder, value, onChange }: TextareaProps) => {
  return <textarea className={styles.textarea} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Textarea;
