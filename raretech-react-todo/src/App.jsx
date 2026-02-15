import React, { useState } from 'react';
import './App.css';



const initTodo = [
  {
    id: 1,
    title: "Todo1",
  },
  {
    id: 2,
    title: "Todo2",
  }
]

export const App = () => {
  const [todoList, setTodoList] = React.useState(initTodo);
  const [addInputValue, setAddInputValue] = React.useState("");
  const [uniqueId, setUniqueId] = React.useState(initTodo.length);


  const onChangeAddInputValue = (event) => {
    setAddInputValue(event.target.value);
  }

  const handleAddTodo = (event) => {
    if (event.key==="Enter" && addInputValue!=="") {
      const newUniqueId = uniqueId + 1;
      setUniqueId(newUniqueId);
      const newTodoList = [...todoList, {id: uniqueId, title: addInputValue}];
      setTodoList(newTodoList);
      setAddInputValue("");
    }
  }

  return (
    <div className="App">
      <h1 className="title">TodoList</h1>
      {/* Todo追加領域 */}
      <section className='common-area'>
        <h2 className="add-title">Add TODO</h2>
        <input type="text" value={addInputValue} onChange={onChangeAddInputValue} onKeyDown={handleAddTodo} />
      </section>

      {/* Todo一覧表示領域 */}
      <section className='common-area'>
        <ul className='todo-list'>
          {todoList.map((todo) => {
            return (
              <li className='todo' key={todo.id}>
                <span className='todo-task'>{todo.title}</span>
                <i className="fa-solid fa-trash-can"></i>
              </li>
            );
          })}
        </ul>
      </section>

    </div>
  );
};
