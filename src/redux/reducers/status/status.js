import produce from "immer";
import {createSelector} from 'reselect';
import {trackingApi} from "../../../api/trackingApi";

const Status = 'status';
const SET_SUPPORT_SUCCESS = `${Status}/SET_SUPPORT_SUCCESS`;

const initialState = {
    orderNumber: '',
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_SUPPORT_SUCCESS: {
            return produce(state, (draft) => {
                draft.supportSuccess = payload
            });
        }
        default:
            return state;
    }
};

export const stateSelector = state => state[Status];
export const tickSelector = createSelector(stateSelector, state => state.tick);



export const setSupportSuccess = data => {
    return {
        type: SET_SUPPORT_SUCCESS,
        payload: data,
    };
};




export const loadData = (hash) => {
    return async (dispatch) => {
     //   dispatch(setPreloader(true))
        let loadDataPartner = await trackingApi.getPartnerInfo(hash);
        if (loadDataPartner.statusCode === 200) {
        //       dispatch(setPartner(loadDataPartner.data))
            let loadDataOrder = await trackingApi.getOrderInfo(hash);
            if (loadDataOrder.statusCode === 200) {
        //        dispatch(setOrder(loadDataOrder.data))
            } else {
         //       dispatch(setError({errorStatus: true, errorTitle: 'Нет доступа', errorText: 'Нам жаль, но по данной карте больше нельзя посмотреть историю. Если у вас возникли вопросы, то вы можете написать нам в службу поддержки'}))
            }
        } else {
       //     dispatch(setError({errorStatus: true, errorTitle: 'Нет доступа', errorText: 'Нам жаль, но по данной карте больше нельзя посмотреть историю. Если у вас возникли вопросы, то вы можете написать нам в службу поддержки'}))
        }
     //   dispatch(setPreloader(false))
    };
};
