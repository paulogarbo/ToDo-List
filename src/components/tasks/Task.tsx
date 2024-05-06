import { useEffect, useState } from 'react'
import styles from './Task.module.css'
import { Trash2, Check } from 'lucide-react'
import * as Checkbox from '@radix-ui/react-checkbox'

interface ITaskProps {
  id: string;
  content: string;
  isComplete: boolean;
  onCompleteTask: (id: string, checked: boolean) => void;
  onDelete: (id: string) => void;
}

export function Task({id, content, isComplete, onCompleteTask, onDelete}: ITaskProps) {
  const [ checked, setChecked ] = useState(isComplete)

  function handleChangeChecked(){
    setChecked(!checked)
  }

  function handleDeleteTask(){
    onDelete(id)
  }

  useEffect(() => {
    onCompleteTask(id, checked)
  }, [checked, id, onCompleteTask])

  return (
    <section className={styles.container}>
      <div>
        <Checkbox.Root 
          className={checked ? styles.checkedBox : styles.checkBox} 
          onCheckedChange={handleChangeChecked}>
          <span>
            <Check className={styles.vetor}/>
          </span>
        </Checkbox.Root>
        <p className={checked ? styles.checkedTaskText : styles.taskText}>
          {content}
        </p>
      </div>
        <button onClick={handleDeleteTask} className={styles.removeTask}>
          <Trash2 size={18}/>
        </button>
    </section>
  )
}