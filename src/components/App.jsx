import { useEffect, useState } from 'react';
import cn from 'classnames';
import { TasksList } from './TasksList';
import { Modal } from './Modal';
import { AddNewTaskForm } from './AddNewTaskForm';
import { loadTasks, saveTasks } from '../helpers';
import { ModalContext } from '../contexts';
import styles from '../styles/App.module.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [todoElements, setTodoElements] = useState(loadTasks());
  const [step, setStep] = useState(1);

  useEffect(() => {
    const handler = () => {
      const scroll = document.body.scrollHeight - (window.innerHeight + window.scrollY);

      if (scroll === 0 && step < Math.ceil(todoElements.length / 10)) {
        setStep(state => ++state);
      }
    };

    window.document.addEventListener('scroll', handler);

    return () => {
      window.document.removeEventListener('scroll', handler);
    };
  }, []);

  const modalContextState = {
    open: isModalOpen,
    setOpen: setIsModalOpen,
    content: modalContent,
    setContent: setModalContent,
  };

  const addNewTaskHandler = text => {
    const newTodoElements = [
      {
        id: Date.now(),
        text,
        subtasks: [],
      },
      ...todoElements,
    ];

    setTodoElements(newTodoElements);
    saveTasks(newTodoElements);
  };

  return (
    <ModalContext.Provider value={modalContextState}>
      <div className={cn(styles.taskApp)}>
        <h1>Какие у вас планы на сегодня?</h1>
        <AddNewTaskForm addNewTask={addNewTaskHandler} />
        <TasksList
          todoElements={todoElements.slice(0, step * 10 + 10)}
          onTasksChange={setTodoElements}
        />
      </div>
      <Modal />
    </ModalContext.Provider>
  );
}

export default App;
