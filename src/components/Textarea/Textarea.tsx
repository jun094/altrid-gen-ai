import cn from 'classnames';
import styles from './Textarea.module.scss';

type TextareaProps = {
  className?: string;
  placeholder?: string;
  height?: string | number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({
  className,
  placeholder = 'Try writing anythings with specific purposes in English here, or paste an existing one to revise.',
  height = 460,
  ...rest
}: TextareaProps) => {
  return (
    <textarea
      style={{ height }}
      className={cn(styles.textarea, className)}
      placeholder={placeholder}
      {...rest}
    ></textarea>
  );
};

export default Textarea;
