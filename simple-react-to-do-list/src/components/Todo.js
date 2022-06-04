import React, { useState } from "react";

const Todo = () => {
  const margin = { margin: 10 };
  const deleteLine = { textDecoration: "line-through" };
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const addHanndler = (e) => {
    const inputObject = {
      content: input,
      date: Date.now(),
      done: false,
    };
    setList([...list, inputObject]);
  };
  const completeHandler = (date) => {
    const newList = list.map((el) => {
      if (el.date === date) {
        el.done = !el.done;
      }
      return el;
    });
    setList(newList);
  };
  const deleteHandler = (date) => {
    console.log(date);
    const newList = list.filter((el) => {
      return el.date !== date;
    });
    setList(newList);
  };
  return (
    <>
      <p>
        <input type="text" value={input} onChange={inputHandler}></input>
        <button onClick={addHanndler}>add</button>
      </p>
      <ul>
        {list.map((listItem) => {
          return (
            <li
              style={listItem.done ? { ...margin, ...deleteLine } : margin}
              key={listItem.date}
            >
              <input
                type="checkbox"
                checked={listItem.done}
                //要帶數值進去所以要多一個callback
                onChange={() => completeHandler(listItem.date)}
              />
              {listItem.content}
              <button
                style={margin}
                onClick={() => deleteHandler(listItem.date)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;
