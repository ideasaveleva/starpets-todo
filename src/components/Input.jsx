import cn from 'classnames';
import styles from '../styles/Input.module.scss'

export const Input = (props) => {
  const { value, onChange, placeholder } = props;

	return (
      <input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className={cn(styles.input)}
      />
  );
};
