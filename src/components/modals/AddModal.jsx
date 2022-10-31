import cn from 'classnames';
import { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import styles from '../../styles/Modal.module.scss'

export const AddModal = props => {
  const { onCancel, onConfirm } = props;
  const [value, setValue] = useState('');

  return (
    <div className={cn(styles.modalForm)}>
      <Input
        value={value}
        onChange={setValue}
      />
      <div>
        <Button
          text="Сохранить"
          onClick={() => onConfirm(value)}
          disabled={!value}
        />
        <Button
          text="Отменить"
          onClick={onCancel}
        />
      </div>
    </div>
  );
};
