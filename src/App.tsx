import styles from './App.module.css'
import { useState } from 'react'
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
  const [tasks, setTasks] = useState<Array<ITasks>>([])
  const numOfTask = tasks.length
  const numOfCompletedTask = tasks.reduce((total, currentTask) => {
    if(currentTask.isComplete) {
      return total + 1
    }
    return total
  }, 0)

  function createNewTask(taskToCreate: string) {
    if(taskToCreate.length === 0) return;

    const isNewTaskExists = tasks.some(tasks => tasks.content === taskToCreate)
    if(!isNewTaskExists) {
      const newTaskObj: ITasks = {
        id: uuidv4(),
        content: taskToCreate, 
        isComplete: false
      }

      setTasks([...tasks, newTaskObj])
    }
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
                    content={task.content}
                    isComplete={task.isComplete}
                  />
                )
              })}
            </div> : <Empty/>}
        </div>
      </div>
    </section>
  )
}