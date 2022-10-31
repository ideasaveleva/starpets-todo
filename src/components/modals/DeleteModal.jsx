import { Button } from '../Button';

export const DeleteModal = props => {
  const { onCancel, onConfirm } = props;

  return (
    <div>
      Действительно хотите удалить эту задачу?
      <div>
        <Button
          text="Да"
          onClick={onConfirm}
        />
        <Button
          text="Нет"
          onClick={onCancel}
        />
      </div>
    </div>
  );
};
