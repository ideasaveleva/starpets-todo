import { useContext } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit, TiDocumentAdd } from 'react-icons/ti';
import cn from 'classnames';
import { Subtask } from './Subtask';
import { ModalContext } from '../contexts';
import { EditModal } from './modals/EditModal';
import { DeleteModal } from './modals/DeleteModal';
import { AddModal } from './modals/AddModal';
import styles from './../styles/Task.module.scss';

export const Task = props => {
  const { todo, onTaskChange, onSubtaskChange, onSubtaskDelete, onTaskDelete, onTaskAdd } = props;

  const { setOpen, setContent } = useContext(ModalContext);

  const saveNewTodoValue = value => {
    onTaskChange({ ...todo, text: value });
    setOpen(false);
  };

  const deleteTodo = () => {
    onTaskDelete(todo.id);
    setOpen(false);
  };

  const addTodo = text => {
    onTaskAdd(todo.id, text);
    setOpen(false);
  };

  const editButtonHandler = () => {
    setOpen(true);
    setContent(
      <EditModal
        todoText={todo.text}
        onCancel={() => setOpen(false)}
        saveNewTodoValue={saveNewTodoValue}
      />,
    );
  };

  const deleteButtonHandler = () => {
    setOpen(true);
    setContent(
      <DeleteModal
        onCancel={() => setOpen(false)}
        onConfirm={deleteTodo}
      />,
    );
  };

  const addButtonHandler = () => {
    setOpen(true);
    setContent(
      <AddModal
        onCancel={() => setOpen(false)}
        onConfirm={addTodo}
      />,
    );
  };

  return (
    <div className={styles.taskWrap}>
      <div className={cn(styles.task)}>
        <div>{todo.text}</div>
        <div className={cn(styles.icons)}>
          <TiDocumentAdd onClick={addButtonHandler} />
          <TiEdit onClick={editButtonHandler} />
          <RiCloseCircleLine onClick={deleteButtonHandler} />
        </div>
      </div>
      {todo.subtasks.map(subTodo => (
        <Subtask
          subTodo={subTodo}
          onSubtaskChange={subtask => onSubtaskChange(todo.id, subtask.id, subtask.text)}
          onSubtaskDelete={id => onSubtaskDelete(todo.id, id)}
          key={subTodo.id}
        />
      ))}
    </div>
  );
};
