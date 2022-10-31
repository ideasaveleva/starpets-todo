import { Task } from './Task';
import { saveTasks } from '../helpers';

export const TasksList = props => {
  const { todoElements, onTasksChange } = props;

  const onTaskChangeHandler = task => {
    const newTodoElements = todoElements.map(el => (el.id === task.id ? task : el));

    saveTasks(newTodoElements);
    onTasksChange(newTodoElements);
  };

  const onTaskDeleteHandler = id => {
    const newTodoElements = todoElements.filter(el => el.id !== id);

    saveTasks(newTodoElements);
    onTasksChange(newTodoElements);
  };

  const onTaskAddHandler = (id, text) => {
    const newTodoElements = todoElements.map(el => {
      if (el.id === id) {
        el.subtasks.unshift({
          id: Date.now(),
          text,
          completed: false,
        });
      }

      return el;
    });

    saveTasks(newTodoElements);
    onTasksChange(newTodoElements);
  };

  const onSubtaskChangeHandler = (taskId, subtaskId, text) => {
    const newTodoElements = todoElements.map(el => {
      if (el.id === taskId) {
        return {
          ...el,
          subtasks: el.subtasks.map(subEl => (subEl.id === subtaskId ? { ...subEl, text } : subEl)),
        };
      }

      return el;
    });

    saveTasks(newTodoElements);
    onTasksChange(newTodoElements);
  };

  const onSubtaskDeleteHandler = (taskId, subtaskId) => {
    const newTodoElements = todoElements.map(el => {
      if (el.id === taskId) {
        return { ...el, subtasks: el.subtasks.filter(subEl => subEl.id !== subtaskId) };
      }

      return el;
    });

    saveTasks(newTodoElements);
    onTasksChange(newTodoElements);
  };

  return (
    <div>
      {todoElements.map(todo => (
        <Task
          todo={todo}
          key={todo.id}
          onTaskChange={onTaskChangeHandler}
          onSubtaskChange={onSubtaskChangeHandler}
          onTaskDelete={onTaskDeleteHandler}
          onSubtaskDelete={onSubtaskDeleteHandler}
          onTaskAdd={onTaskAddHandler}
        />
      ))}
      {todoElements.length < 1 && <div>Нет задач на сегодня</div>}
    </div>
  );
};
