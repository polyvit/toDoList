import React, {useEffect} from "react";
import {
    loadData,
} from "../../redux/reducers/list-reducer/list-reducer";
import {useDispatch, useSelector} from "react-redux";
import './list.scss'

const List = ({smallImgStatus}) => {
    //const socialPopup = useSelector(socialPopupSelector);

    // useEffect(() => {
    //     dispatch(loadData(window.location.pathname.slice(1) || '123'))
    //     // eslint-disable-line react-hooks/exhaustive-deps
    // }, []);

    const dispatch = useDispatch()

    const addNewTask = () => {

    }

    return (
        <div className='square_wrapper'>
            <div className='square'>
                <h1>To-do list</h1>
                <div>
                    <input value="Add new message"/>
                    <button onClick={addNewTask}>Add</button>
                </div>
                <div>задача 1</div>
                <div>задача 2</div>
                <div>задача 3</div>
                <div>задача 4</div>
            </div>
        </div>
    );
}

export default List;