import React from 'react';

const Todos = ({todostate,statedel}) => {
    const todolist = todostate.length ? (todostate.map(todo => {
        return(
            <div onClick={() => {statedel(todo.id)}} className='collection-time' key={todo.id}>
                <span>{todo.content}</span>
            </div>
        )
    })) : (
        <p className='center'>There is no todo left!! Enjoy the day!!</p>
    )
    return (
        <div className='todos collection'>
            {todolist}
        </div>
    )
}
export default Todos;
