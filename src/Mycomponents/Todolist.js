import React from 'react'
import { Link } from 'react-router-dom'
export const Todolist = () => {
    let style={
        margin:"200px auto",
    }
    return (
        <div className="container my-3" style={{margin:"200px auto"},{paddingBottom:"350px"}}>
            <h1 style={{color:"Green"}}>Welcome to Todo App !!!</h1>
            <Link to={'/'}><button className="btn btn-outline-success btn-lg" type="submit">Click Here</button> </Link>
        </div>
    )
}
