import React from "react";
import List from "./List";

export default function Main(props) {

    function handleToggleAll(event) {
        console.log("handleToggleAllStarted");
        props.onToggleAll(event.target.checked);
    }

    return (
        <section class="main">
            <input class="toggle-all"
                type="checkbox" 
                onChange={handleToggleAll}/>
            <List items = {props.items} 
                onRemoveToDo={props.onRemoveToDo}
                onMarkCompleted={props.onMarkCompleted}/>
        </section>
    )
}