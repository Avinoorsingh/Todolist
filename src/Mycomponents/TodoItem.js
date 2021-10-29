import React from 'react'
import Swal from "sweetalert2";
export const TodoItem = ({todo, onDelete}) => {
    function HandleClick3() {  
        Swal.fire({  
          title: 'Success',  
          type: 'Danger',  
          text: 'Todo Deleted !',
          timer: 1500  
        });  
      }  
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo); HandleClick3()}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
