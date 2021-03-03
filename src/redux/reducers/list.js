import produce from "immer";
import {createSelector} from 'reselect';

const List = 'list';
const ADD_TASK = `${List}/ADD_TASK`;
const REMOVE_TASK = `${List}/REMOVE_TASK`;

const initialState = {
    tasks: [
        {text: "Купить хлеб", id: 1, isCompleted: false},
        {text: "task 2", id: 2, isCompleted: false},
        {text: "task 3", id: 3, isCompleted: false},
        {text: "task 4", id: 4, isCompleted: false},
    ]
};

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            let newText = action.newText
            return {
                ...state,
                tasks: [...state.tasks, {text: newText, id: (new Date()).getTime(), isCompleted: false}]
            }
        }
        case REMOVE_TASK: {
            return {
                ...state,
                tasks: [...state.tasks].filter( task => task.id !== action.id)
        }
            }
        default:
            return state;
    }
};


// case ADD_POST: {
//     let newPost = {
//         id: 5,
//         message: action.newPostText,
//         likesCount: 0
//     };
//     return {
//         ...state,
//         newPostText: '',
//         posts: [...state.posts, newPost]
//     };
// }

export const addNewTaskSuccess = (text) => {
    return {
        type: ADD_TASK,
        newText: text
    };
};
export const removeTaskSuccess = (id) => {
    return {type: REMOVE_TASK, id};
};

export const stateSelector = state => state[List];

export const tasksSelector = createSelector(stateSelector, state => state.tasks);


// export const getTasks = (state) => {
//     return state.tasks
// }



export default ListReducer





// export const loadData = (hash) => {
//     return async (dispatch) => {
//      //   dispatch(setPreloader(true))
//         let loadDataPartner = await trackingApi.getPartnerInfo(hash);
//         if (loadDataPartner.statusCode === 200) {
//         //       dispatch(setPartner(loadDataPartner.data))
//             let loadDataOrder = await trackingApi.getOrderInfo(hash);
//             if (loadDataOrder.statusCode === 200) {
//         //        dispatch(setOrder(loadDataOrder.data))
//             } else {
//          //       dispatch(setError({errorStatus: true, errorTitle: 'Нет доступа', errorText: 'Нам жаль, но по данной карте больше нельзя посмотреть историю. Если у вас возникли вопросы, то вы можете написать нам в службу поддержки'}))
//             }
//         } else {
//        //     dispatch(setError({errorStatus: true, errorTitle: 'Нет доступа', errorText: 'Нам жаль, но по данной карте больше нельзя посмотреть историю. Если у вас возникли вопросы, то вы можете написать нам в службу поддержки'}))
//         }
//      //   dispatch(setPreloader(false))
//     };
// };
