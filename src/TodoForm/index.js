import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };


    return(
        <form onSubmit={onSubmit}>
            <label>Escribe una nueva tarea</label>
            <textarea placeholder="Acá escribe" value={newTodoValue} onChange={onChange} />
            <div className="todoForm-buttonContainer">
                <button type="button" className="TodoForm-button--cancel" onClick={onCancel} >Cancelar</button>
                <button type="submit" className="TodoForm-button--add">Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm };