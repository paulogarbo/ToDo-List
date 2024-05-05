import { useState } from 'react';
import styles from './TaskHeader.module.css'

interface ITaskHeader {
  numOfTasks: number;
  numOfCompleted: (number);
}

export function TaskHeader({numOfTasks, numOfCompleted}: ITaskHeader) {
  return (
    <header className={styles.headerContent}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{numOfTasks}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>{numOfTasks == 0 ? 0 : `${numOfCompleted} de ${numOfTasks}`}</span>
      </aside>
    </header>
  )
}