import React from 'react';
import './ToDoItem.css';

const ToDoItem = props => {
    const resolvedClass = {
        textDecoration: 'line-through',
        fontFamily: 'Comic Sans MS',
        color:'#0c101e'
    }

    const defaultClass ={
        fontFamily: 'Comic Sans MS',
        color:'#8f9eba'
    }
    
    return(
        <div className='todo-item'>
            <div className='description-wrapper'>
                <p style={props.completed == true ? resolvedClass : defaultClass}>{props.description}</p>
            </div>
            <div className='input-wrapper'>
                <input type = "checkbox" 
                defaultChecked = {props.completed}
                onChange={props.handleChange}
                />
            </div>
        </div>
    )
}

export default ToDoItem;