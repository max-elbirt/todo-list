import React from "react";
import Li from "./Li";
import { useState } from "react";
  

export default function List(props) {

    return (
        <ul class="todo-list">
            {props.items.map(todo => (
                <Li item={todo}
                    onRemoveToDo={props.onRemoveToDo}
                    onMarkCompleted={props.onMarkCompleted}
                    />
            ))}
        </ul>
    )
}
