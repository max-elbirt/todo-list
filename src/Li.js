import React, { Children, useState, useRef, useEffect} from "react";
import {setTodos} from "./App"
export default function Li (props) {

    const [editing, setEditing] = useState(false);

    function removeFromtodos(title) {
        return ()=>{
            props.onRemoveToDo(title);
        }
    }

    function markCompleted() {
        const item = props.item;
        item.completed ? item.completed = false : item.completed = true;
        props.onMarkCompleted(item);
    }

    function handleDoubleClick() {
        if (editing) {
            setEditing(false);
        }
        else{
            setEditing(true);
            console.log(editing);
        }
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            console.log(event.target.value);
            props.item.title = event.target.value;
            setEditing(false);
        }
    } 

    return (
        <li className={props.item.completed ? editing ? 'editing' : 'completed' : editing ? 'editing' : ''} key={props.item.id}>
            <div class="view">
                <input class="toggle"
                        type="checkbox"
                        onChange={markCompleted}
                         />
                <label onDoubleClick = {handleDoubleClick}>
                        {props.item.title}</label>
                <button class="destroy" 
                        onClick= {removeFromtodos(props.item.title)} />
            </div>
            <input class="edit" 
                    defaultValue={props.item.title}
                    onKeyDown={handleKeyDown}
                    />
        </li>
    )
}

/*
export function useTodos(){
    receives all then methods and hooks created in app
    the function has to return all other functions we've copied into it as an p
    object.
    afterwards we pass it on to app as an object named useTodos().
}
 */