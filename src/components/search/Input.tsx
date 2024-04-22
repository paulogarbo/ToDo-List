import styles from './Input.module.css'
import { Button } from './Button'

export function Input() {
  return (
    <div className={styles.addTaskWrapper}>
      <label className={styles.srOnly}>Adicione uma nova tarefa</label>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <Button/>
    </div>
  )
}