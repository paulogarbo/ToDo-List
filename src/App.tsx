import styles from './App.module.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { Input } from './components/search/Input'
import { Task } from './components/tasks/Task'
import { TaskHeader } from './components/tasks/TaskHeader'
import { Empty } from './components/tasks/Empty'

export function App() {
  const [tasks, setTasks] = useState([])

  return (
    <section className={styles.contentWrapper}>
      <Header/>
      <div className={styles.tasksWrapper}>
        <Input/>
        <div className={styles.tasksContent}>
          <TaskHeader/>
          {tasks.length > 0 ? 
            <div>
              {tasks.map(task => {
                return (
                  <Task
                    isComplete={task.isComplete}
                    taskContent={task.Content}
                  />
                )
              })}
            </div> : <Empty/>}
        </div>
      </div>
    </section>
  )
}