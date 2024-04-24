import styles from './Task.module.css'
import { Trash2 } from 'lucide-react'

export function Task() {
  return (
    <div className={styles.tasksWrapper}>
      <button className={styles.checkedTask}></button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper. 
        Duis vel sed fames integer.
      </p>
      <button className={styles.removeTask}>
        <Trash2 size={16}/>
      </button>
    </div>
  )
}