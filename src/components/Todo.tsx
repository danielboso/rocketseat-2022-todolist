import style from './Todo.module.css';
import { PlusCircle, Trash } from 'phosphor-react'
import { useState } from 'react';
import Clipboard from '../assets/Clipboard.svg';
import { Checkbox } from './Checkbox';

interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}

export function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState('');

  function createTask() {
    setTasks([...tasks, {
      id: (Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)),
      name: taskName, isCompleted: false }]
    );
    setTaskName('');
  }

  function toogleTask(id: number, isCompleted: boolean) {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted } : task))
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className={style.container}>
      <div className={style.createContainer}>
        <input className={style.createInput} value={taskName} onChange={event => setTaskName(event.target.value)}  type="text" placeholder='Adicione uma nova tarefa'/>
        <button className={style.button} onClick={createTask}>
          Criar
          <PlusCircle />
        </button>
      </div>
      <div className={style.tasks}>
        <div className={style.tasksCounter}>
          <p className={style.tasksCreated}>Tarefas criadas <span>{tasks.length}</span></p>
          <p className={style.tasksCompleted}>Concluídas <span>{tasks.filter(task => task.isCompleted).length}</span></p>
        </div>
        {tasks.length === 0 ?
          <div className={style.noTasks}>
            <img className={style.clipboard} src={Clipboard} alt="" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        :
          <div>
            {tasks.map((task, index) => (
              <div className={style.task} key={index}>
                <div className={style.check}>
                  <Checkbox isCompleted={task.isCompleted} onClick={toogleTask} taskId={task.id} />
                </div>
                <p className={`${style.text} ${task.isCompleted ? style.textIsCompleted : ''}`}>{task.name}</p>
                <button className={style.delete} onClick={() => deleteTask(task.id)}>
                  <Trash size={24}/>
                </button>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  )
}