import React from 'react'
//import './footer.css'
export const Footer = () => {
    let footerStyle ={
        position: "relative",
        top: "10vh",
        width: "100%"
    }
    return (
        <div className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com<br/>
            Developed by Avinoor Singh
    </p>
        </div>
    )
}
