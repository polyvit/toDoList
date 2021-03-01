import React, {useEffect} from "react";
import {
    loadData,
} from "../../redux/reducers/status/status";
import {useDispatch, useSelector} from "react-redux";
import './home.scss'

const Home = ({smallImgStatus}) => {
    //const socialPopup = useSelector(socialPopupSelector);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadData(window.location.pathname.slice(1) || '123'))
        // eslint-disable-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='square_wrapper'>
            <div className='square'>
                <div>задача 1</div>
                <div>задача 2</div>
                <div>задача 3</div>
                <div>задача 4</div>

            </div>
        </div>
    );
}

export default Home;