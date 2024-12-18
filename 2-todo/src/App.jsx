import { useEffect, useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App( onTaskClick, onDeleteTaskClick, onAddTaskSubmit ) {
  // Passa os atributos para o props, e o props para o componente Tasks
  // const [tasks, setTasks] = useState([
  //   { 
  //     id: 1, 
  //     title: "Estudar React",
  //     description: "Estudar React para fazer projetos",
  //     isCompleted: false,
  //   },{
  //     id: 2,
  //     title: 'Estudar Tailwind CSS',
  //     description: 'Aprender Tailwind CSS para estilizar projetos',
  //     isCompleted: false,
  //   }
  // ])


  // Consumindo dados de uma API - Exemplo

  // Quando o segundo elemento é uma lista vazia, significa que a função será executada uma única vez, que será quando o usuário acaba de acessar a aplicação
  // useEffect(() => {
  //   async function fetchTasks() {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {method: 'GET'})
  //     const data = await response.json()
  //     setTasks(data)
  //   }
  //   fetchTasks()
  // }, [])


  // LocalStorage para armazenar
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])


  // A função useEffect é executada toda vez que o estado de tasks é alterado
  useEffect(() => {localStorage.setItem("tasks", JSON.stringify(tasks))}, [tasks])


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
        <h1 className="title-3xl title-slate-100 font-bold text-center text-white">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
    </div>
  )
}

export default App
