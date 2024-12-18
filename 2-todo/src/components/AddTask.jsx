import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="bg-slate-200 space-y-4 p-6 bg-slate 200 rounded-md shadow flex flex-col">
            <Input 
                value={title} 
                type="text" 
                placeholder="Digite o título da tarefa" 
                onChange={(event) => setTitle(event.target.value)}
            />

            <Input 
                value={description} 
                type="text" 
                placeholder="Digite a descrição da tarefa" 
                onChange={(event) => setDescription(event.target.value)}
            />

            <button onClick={() => {
                if (!title.trim() || !description.trim()) {
                    return alert("Preencha todos os campos")
                } else {
                    onAddTaskSubmit(title, description)
                    setTitle("")
                    setDescription("")
                }}} 
                className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
                Adicionar
            </button>
        </div>
    )
}

export default AddTask;