import styles from './Input.module.css'
import { Button } from './Button'
import { useRef } from 'react'

export function Input(): React.ReactElement{
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleSubmitTask = (event: React.FormEvent) => {
    event.preventDefault()
    if(inputRef.current?.value == null) return;
    
  }

  return (
    <form onSubmit={handleSubmitTask} className={styles.addTaskWrapper}>
      <label className={styles.srOnly}>Adicione uma nova tarefa</label>
      <input 
        type="text"
        ref={inputRef}
        placeholder='Adicione uma nova tarefa' />
      <Button />
    </form>
  )
}