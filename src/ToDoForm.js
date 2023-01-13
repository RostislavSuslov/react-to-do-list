import { useState } from "react"

function ToDoForm({ addTask }){
    const [userInput, setUserInput] = useState('')
    
    const handelChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleKeyPress = (e) => {
        if(e.ket === "Enter") {
            handleSubmit(e)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={userInput}
                type="text"
                onChange={handelChange}
                onKeyDown={handleKeyPress}
                placeholder="Введите значение"
            /> 
            <button>Сохранить</button>
        </form>
    )
}

export default ToDoForm