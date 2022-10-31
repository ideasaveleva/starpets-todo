export const loadTasks = () => {
  const tasks = JSON.parse(window.localStorage.getItem('tasks'))
  
  return tasks || []
}

export const saveTasks = tasks => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks))
}
