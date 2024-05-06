import styles from './App.module.css'
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/search/Input'
import { Task } from './components/tasks/Task'
import { TaskHeader } from './components/tasks/TaskHeader'
import { Empty } from './components/tasks/Empty'
import { v4 as uuidv4 } from 'uuid'

interface ITasks {
  id: string;
  content: string;
  isComplete: boolean;
}

export function App(): React.ReactElement {
  const taskJson = localStorage.getItem('Tasks')
  const storedTasks = taskJson !== null ? JSON.parse(taskJson) : []
  const [tasks, setTasks] = useState<Array<ITasks>>(storedTasks)
  const numOfTask = tasks.length
  const numOfCompletedTask = tasks.reduce((total, currentTask) => {
    if(currentTask.isComplete === true) {
      return total + 1
    }
    return total
  }, 0)

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks))
  }, [tasks])

  function createNewTask(taskToCreate: string) {
    if(taskToCreate.length === 0) return;

    const isNewTaskExists = tasks.some(tasks => tasks.content === taskToCreate)
    if(isNewTaskExists) {
      alert("Task já cadastrada.")
      return
    }
    const newTaskObj: ITasks = {
      id: uuidv4(),
      content: taskToCreate, 
      isComplete: false
    }

    setTasks([...tasks, newTaskObj])
  }

  function handleTaskCompletion(id: string, newCheckedState: boolean) {
    const modifiedTasks = tasks.map(obj => {
      if(obj.id === id) {
        return {...obj, isComplete: newCheckedState}
      }
      return obj
    })   
    setTasks(modifiedTasks)
  }

  function deleteTask(id: string) {
    const taskWithoutOne = tasks.filter((obj) => {
      return obj.id !== id
    })
    setTasks(taskWithoutOne)
  }
  return (
    <section className={styles.contentWrapper}>
      <Header/>
      <div className={styles.tasksWrapper}>
        <Input onCreateTask={createNewTask}/>
        <div className={styles.tasksContent}>
          <TaskHeader 
            numOfTasks={numOfTask}
            numOfCompleted={numOfCompletedTask}
          />
          {tasks.length > 0 ? 
            <div>
              {tasks.map(task => {
                return (
                  <Task
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    isComplete={task.isComplete}
                    onCompleteTask={handleTaskCompletion}
                    onDelete={deleteTask}
                  />
                )
              })}
            </div> : <Empty/>}
        </div>
      </div>
    </section>
  )
}