import React, {useEffect, useState} from "react";
import {
    addNewTaskSuccess,
    loadData,
} from "../../redux/reducers/list-reducer/list-reducer";
import {useDispatch, useSelector} from "react-redux";
import './list.scss'

const List = () => {
    //const socialPopup = useSelector(socialPopupSelector);

    // useEffect(() => {
    //     dispatch(loadData(window.location.pathname.slice(1) || '123'))
    //     // eslint-disable-line react-hooks/exhaustive-deps
    // }, []);

    let [taskText, setTaskText] = useState("")

    const dispatch = useDispatch()

    const fillTheInput = (e) => {
        setTaskText(e.target.value)
    }

    const addNewTask = () => {
        dispatch(addNewTaskSuccess(taskText))
    }

    return (
        <div className='square_wrapper'>
            <div className='square'>
                <h1>To-do list</h1>
                <div>
                    <input onChange={fillTheInput} value={taskText}/>
                    <button onClick={addNewTask}>Add</button>
                </div>
                <div>задача 1</div>
            </div>
        </div>
    );
}

export default List;