import React from 'react'
export const About = () => {
    let style={
        textalign: "center",
        display: "block",
        justifycontent: "center",
        alignitems: "center",
        margin: "auto",
        width: "70%",
    }
    return (
        <div className="container my-3">
            <h1>We’ll be here for our users and our teammates for decades to come.</h1>
            <img src="https://www.marketing91.com/wp-content/uploads/2020/03/Top-10-apps-for-To-do-List.jpg" style={style} />
            <h4>This app helps you to organize and simplify your plans, whether it's for work, school, or home. Todo is free and available across the web and iOS, Mac, Android, and Windows devices.</h4>
        </div>
    )
}
