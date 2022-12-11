import React from "react";

export default function Footer(props) {

    function clearCompletedHook(s) {
        return () => {props.onClearCompleted(s)};
    }

    return (
        <footer class="footer">
            <span class="todo-count"><strong>{props.itemLeftCount}</strong> items left</span>
            <button class="clear-completed" onClick={props.onClearCompleted}>Clear completed
            </button>
        </footer>
    )
}