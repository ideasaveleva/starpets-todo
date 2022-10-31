import { useContext } from 'react';
import cn from 'classnames';
import { ModalContext } from '../contexts';
import styles from './../styles/Modal.module.scss';

export const Modal = () => {
  const { open, content, setOpen } = useContext(ModalContext);

  return open ? (
    <div className={cn(styles.modal)}>
      <div
        className={cn(styles.backdrop)}
        onClick={() => setOpen(false)}
      ></div>
      <div className={cn(styles.window)}>{content}</div>
    </div>
  ) : null;
};
