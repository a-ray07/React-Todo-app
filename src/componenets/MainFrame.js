import React, { useState, useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import DeleteTask from './DeleteTask';
import DoneTask from './DoneTask';
import CentralState from '../context/centralState.context';

const MainFrame = () => {
  const { lists, setList, selectedListItemIndex, setSelectedListItemIndex } = useContext(CentralState)

  const [todoName, setTodoName] = useState("");

  const addTodos = () => {
    if (todoName === '') return
    setList((prev) => {
      const list = [...prev];
      list[selectedListItemIndex].allTodos.push({
        id: uuid(),
        todoName,
        isCompleted: false
      });
      return list;
    })
    setTodoName('')

  }

  const doneTask = (todoIndex) => {
    setList((prev) => {
      const list = [...prev]
      list[selectedListItemIndex].allTodos[todoIndex].isCompleted = !list[
        selectedListItemIndex
      ].allTodos[todoIndex].isCompleted;
      return list;
    });
  };

  const deleteTask = (index) => {
    console.log('del')
    setList((prev) => {
      const uplist = [...prev];
      uplist[selectedListItemIndex].allTodos.splice(index, 1);


      return uplist;
    });
  };

  return (
    <div className='main-frame'>
      <div className='cont'>
        <div>

          <h3>Add a Task</h3>
          <div>
            <input className='inp-task' type='text' value={todoName}
              placeholder='Add Task....' onChange={(e) => { setTodoName(e.target.value) }} />
            <button type='submit' onClick={addTodos}>Add Task</button>
          </div>

          <h3>Tasks</h3>
          <ol>
            {lists[selectedListItemIndex]?.allTodos.map((list, index) => (
              <li key={list.id}>
                {list.todoName}
                <DoneTask taskId={index} onDone={doneTask} />
                <DeleteTask deleteTask={() => {
                  deleteTask(index)
                }} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MainFrame;