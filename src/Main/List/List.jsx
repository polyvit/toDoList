import React, {useState} from "react";
import {
    addNewTaskSuccess, tasksSelector,
} from "../../redux/reducers/list";
import {useDispatch, useSelector} from "react-redux";
import './list.scss'
import ToDoItem from "./toDoItem";

const List = () => {
    const tasks = useSelector(tasksSelector)

    const [taskText, setTaskText] = useState("")

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
                <div className='title_wrapper'><h1>To-do list</h1></div>
                <div>
                    <input onChange={fillTheInput} value={taskText}/>
                    <button onClick={addNewTask}>Add</button>
                </div>
                <div className='tasks_wrapper'>
                {tasks.map( task => <ToDoItem text={task.text} id={task.id}/>)}
                </div>
            </div>
        </div>
    );
}

export default List;

// useEffect(() => {
//     dispatch(loadData(window.location.pathname.slice(1) || '123'))
//     // eslint-disable-line react-hooks/exhaustive-deps
// }, []);
