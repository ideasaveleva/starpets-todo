import cn from 'classnames';
import styles from './../styles/Button.module.scss';

export const Button = props => {
  const { text, onClick, disabled = false } = props;

  const clickHandler = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      onClick={clickHandler}
      className={cn(styles.button, disabled ? styles.disabled : null)}
    >
      {text}
    </button>
  );
};
