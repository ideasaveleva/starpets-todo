import { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';

export const EditModal = props => {
  const { onCancel, todoText, saveNewTodoValue } = props;
  const [value, setValue] = useState(todoText);

  const saveButtonClickHandler = () => {
    if (value) {
      saveNewTodoValue(value);
    }
  };

  return (
    <div>
      <Input
        value={value}
        onChange={setValue}
      />
      <div>
        <Button
          text="Сохранить"
          onClick={saveButtonClickHandler}
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
