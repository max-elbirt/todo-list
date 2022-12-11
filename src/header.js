import React from "react";


function Header(props) {

    function handleTaskInput(e) {
        if (e.key === 'Enter') {
            props.onAddItem(e.target.value);
            console.log('passing value');
        }
    }

   return (
     <header class="header">
        <h1>{props.items}</h1>
        <input className="new-todo"
               placeholder= {props.text}
               onKeyDown = {handleTaskInput}
               autoFocus />
    </header> )
}

export {Header};