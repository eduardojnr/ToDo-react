import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="bg-slate-200 space-y-4 p-6 bg-slate 200 rounded-md shadow flex flex-col">
            <input 
                value={title} 
                type="text" 
                placeholder="Digite o título da tarefa" 
                className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                onChange={(event) => setTitle(event.target.value)}>
            </input>

            <input 
                value={description} 
                type="text" 
                placeholder="Digite a descrição da tarefa" 
                className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
                onChange={(event) => setDescription(event.target.value)}>
            </input>

            <button onClick={() => onAddTaskSubmit(title, description)} 
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
                Adicionar
            </button>
        </div>
    )
}

export default AddTask;