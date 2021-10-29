import './App.css';
import Header from './Mycomponents/Header';
import { Footer } from './Mycomponents/Footer';
import { Todos } from './Mycomponents/Todos';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './Mycomponents/AddTodo';
import { About } from './Mycomponents/About';
import { Contactus } from './Mycomponents/Contactus';
import { Todolist } from './Mycomponents/Todolist';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let initTodo;
  if( localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("I am ondelete of todo", todo);
   //deleting this way not going to work in react
   // let index=todos.indexOf(todo);
   // todos.splice(index, 1);
   setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  console.log("deleted", todos)
  localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo=(title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno;
    if(todos.length===0){
    sno=0;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));  
    },[todos])
  return (
   <>
     <Router>
      <Header title="Hi Todos" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/contactus">
            <Contactus />
          </Route> 
          <Route exact path="/todolist">
            <Todolist />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
   </>
  );
}

export default App;
