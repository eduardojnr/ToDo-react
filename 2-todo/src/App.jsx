import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App( onTaskClick, onDeleteTaskClick, onAddTaskSubmit ) {
  // Passa os atributos paea o props, e o props para o componente Tasks
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: "Estudar React",
      description: "Estudar React para fazer projetos",
      isCompleted: false,
    },{
      id: 2,
      title: 'Estudar Tailwind CSS',
      description: 'Aprender Tailwind CSS para estilizar projetos',
      isCompleted: false,
    },{
      id: 3,
      title: 'Estudar TypeScript',
      description: 'Aprender TypeScript para entender de Back-end',
      isCompleted: false,
    }
  ])
  
  // Função para atualizar o estado de uma tarefa
  function onTaskClick(taskId) {
    const NewTasks = tasks.map(task => {
      // Precisa atualizar
      if (task.id == taskId) {
        return {...task, isCompleted: !task.isCompleted}
      } else { // Não precisa atualizar
        return task
      }
    })
    // Atualiza o estado das tarefas
    setTasks(NewTasks)
  }

  // Deleta a tarefa selecionada
  function onDeleteTaskClick(taskId) {
    const NewTasks = tasks.filter(task => task.id !== taskId)
    setTasks(NewTasks)
  }

  // Adiciona uma nova tarefa
  function onAddTaskSubmit(title, description) {
    const NewTasks = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    }
    setTasks([...tasks, NewTasks])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="title-3xl title-slate-100 font-bold title-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  )
}

export default App
