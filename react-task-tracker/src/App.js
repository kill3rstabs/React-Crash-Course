import './App.css';
import { Header } from "./Components/Header.js";
import { Todos } from './Components/Todos';
import { Footer } from "./Components/Footer";
import React, { useState, useEffect } from 'react';
import { AddTodo } from "./Components/AddTodo";

function App() {
  // Load todos from local storage if available, otherwise set default todos
  //JSON.PARSE is used to convert the json into js object
  const initialTodos = JSON.parse(localStorage.getItem('todos'))
  //ye use state hai phele intial state define krtey hain phr jesey hi change hota tou setTodos ka function call krkey rerender krsktey
  const [todos, setTodos] = useState(initialTodos);


  //use effect takes two parameters one is a callback function and other is dependencies.
  //Kis variable mein change aye ga tou ye useEffect chaley ga.
  //ager koi dependency nahi rakhi tou har render honey pe useEffect chaley ga which is a bad practice|takes up browsers load.
  useEffect(() => {
    // Save todos to local storage whenever todos state changes
    //json.stringfy is used to convert js object into json
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  

  function onDelete(todo) {
    console.log("I am onDelete!", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }

  const addTodo = (title, desc) => {
    console.log("I am a todo ", title, " ", desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  return (
    <>
      <Header title="To do List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
