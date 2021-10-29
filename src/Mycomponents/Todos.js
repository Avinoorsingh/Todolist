import React from 'react'
import { TodoItem } from './TodoItem';
export const Todos = (props) => {
    let mystyle={
        minHeight:"1vh",
        margin:"40px auto"
    }
    let style={
        textalign: "center",
        display: "block",
        justifycontent: "center",
        alignitems: "center",
        margin:"100px auto",
        width: "60%",
        
    }
    return (
        <div className="container" style={mystyle}>
         {props.todos.length===0? <h1>"No Todos to display, You can Add a Todo ! "</h1>:
         props.todos.map((todo)=>{
             return(<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
             )
         })
         }
         <img src="https://www.marketing91.com/wp-content/uploads/2020/03/Things-To-do-List-App-%E2%80%93-For-the-elegant-design.jpg" style={style}></img>
         <h4 style={{margin:"100px auto"}}>Todo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks at any time and delete a task that is completed. </h4>
        </div>
    )
}
