import React from "react";
import './toDoItem.scss'
import {useDispatch} from "react-redux";
import {removeTaskSuccess} from "../../redux/reducers/list";
import basket from "../../images/vector/basket.png";

const ToDoItem = (props) => {

    const dispatch = useDispatch()

    const removeTask = () => {
        let id = props.id
        dispatch(removeTaskSuccess(id))
    }

    return (
        <div className='todo_item_wrapper'>
         {props.text} <img src={basket} className='item_img' onClick={removeTask}/>
        </div>
    )
}

export default ToDoItem
