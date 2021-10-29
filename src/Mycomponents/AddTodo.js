import React, { useState } from 'react';
import Swal from "sweetalert2";
export const AddTodo = (props) => {
  function HandleClick() {  
    Swal.fire({  
      title: 'Success',  
      type: 'success',  
      text: 'Your Todo has been saved.',  
      timer: 1500
    });  
  }  
 function HandleClick1() {  
    Swal.fire({  
      title: 'Attention !',  
      text: 'Please add Title and Description before adding a Todo !',  
      icon: 'warning',  
      showCancelButton: false,  
      confirmButtonColor: '#3085d6',  
      cancelButtonColor: '#d33',  
      confirmButtonText: 'Okay'  
    });  
  }  
    const [title, settitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
          HandleClick1();
        }
        else{
        props.addTodo(title, desc);
        HandleClick();
        settitle("");
        setDesc("");
    }
  }
    return (
        <div className="container my-3">
            <h1>Add a Todo</h1>
            <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-success">Add Todo</button>
</form>
        </div>
    )
}
