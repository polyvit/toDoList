import produce from "immer";
import {createSelector} from 'reselect';


const ADD_TASK = 'ADD_TASK';

const initialState = {
    tasks: [
        {text: "task 1"},
        {text: "task 2"},
        {text: "task 3"}
    ],
    taskText: '',
    isCompleted: false
};

const ListReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_TASK: {
            return produce(state, (draft) => {
                draft.taskText = payload.task
            });
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

export const stateSelector = state => state[ListReducer];

export const tickSelector = createSelector(stateSelector, state => state.tick);



export const addNewTaskSuccess = task => {
    return {
        type: ADD_TASK,
        payload: task,
    };
};


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
