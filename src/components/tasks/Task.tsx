import { useState } from 'react'
import styles from './Task.module.css'
import { Trash2, Check } from 'lucide-react'
import * as Checkbox from '@radix-ui/react-checkbox'

interface ITaskProps {
  id: string;
  content: string;
  isComplete: boolean;
  onCompleteTask: (id: string, checked: boolean) => void;
}

export function Task({id, content, isComplete, onCompleteTask}: ITaskProps) {
  const [ checked, setChecked ] = useState(isComplete)

  function handleChangeChecked() {
    setChecked(!checked)
    onCompleteTask(id, checked)
  }

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
        <button className={styles.removeTask}>
          <Trash2 size={18}/>
        </button>
    </section>
  )
}