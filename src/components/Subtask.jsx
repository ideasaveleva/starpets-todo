import { useContext } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import cn from 'classnames';
import { DeleteModal } from './modals/DeleteModal';
import { EditModal } from './modals/EditModal';
import { ModalContext } from '../contexts';
import styles from './../styles/Subtask.module.scss';

export const Subtask = props => {
  const { subTodo, onSubtaskChange, onSubtaskDelete } = props;
  const { setOpen, setContent } = useContext(ModalContext);

  const saveNewSubTodoValue = value => {
    onSubtaskChange({ ...subTodo, text: value });
    setOpen(false);
  };

  const deleteSubTodo = () => {
    onSubtaskDelete(subTodo.id);
    setOpen(false);
  };

  const editButtonHandler = () => {
    setOpen(true);
    setContent(
      <EditModal
        todoText={subTodo.text}
        onCancel={() => setOpen(false)}
        saveNewTodoValue={saveNewSubTodoValue}
      />,
    );
  };

  const deleteButtonHandler = () => {
    setOpen(true);
    setContent(
      <DeleteModal
        onCancel={() => setOpen(false)}
        onConfirm={deleteSubTodo}
      />,
    );
  };

  return (
    <div className={cn(styles.subtask)}>
      <div>{subTodo.text}</div>
      <div className={cn(styles.icons)}>
        <TiEdit onClick={editButtonHandler} />
        <RiCloseCircleLine onClick={deleteButtonHandler} />
      </div>
    </div>
  );
};
