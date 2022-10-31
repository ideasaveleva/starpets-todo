import { useState } from 'react';
import cn from 'classnames';
import { Input } from './Input';
import { Button } from './Button';
import styles from './../styles/AddNewTaskForm.module.scss';

export const AddNewTaskForm = props => {
  const { addNewTask } = props;
  const [value, setValue] = useState('');

  const addButtonClickHandler = () => {
    addNewTask(value);
    setValue('');
  };

  return (
    <div className={cn(styles.formWrap)}>
      <Input
        value={value}
        onChange={setValue}
      />
      <Button
        text="Добавить"
        onClick={addButtonClickHandler}
        disabled={value.length < 1}
      />
    </div>
  );
};
