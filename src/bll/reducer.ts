import {ICurrentValue} from "../entities/entities";
import {api} from "../dal/api";

const SET_CURRENT_VALUE = "COUNTER/COUNT-REDUCER/SET_CURRENT_VALUE";
const CHANGE_CURRENT_VALUE = "COUNTER/COUNT-REDUCER/CHANGE_CURRENT_VALUE";



const initialState = {
    currentValue: 0
};
type initialStateType= typeof initialState

export const reducer = (state = initialState, action: TodoListReducerActionTypes): initialStateType => {
    switch (action.type) {
        case SET_CURRENT_VALUE:
            return {
                ...state,
                currentValue: action.currentValue
            };
            case CHANGE_CURRENT_VALUE:
            return {
                ...state,
                currentValue: action.newValue
            };
        default:
            return state;
    }
};
type TodoListReducerActionTypes = SetCountSuccessACType|ChangeCountSuccessType;

type SetCountSuccessACType = {
    type:typeof SET_CURRENT_VALUE
    currentValue:number
}
type ChangeCountSuccessType = {
    type:typeof CHANGE_CURRENT_VALUE
    newValue:number
}

const setCountSuccess = (currentValue: number):SetCountSuccessACType => ({type: SET_CURRENT_VALUE, currentValue});
const changeCountSuccess = (newValue: number):ChangeCountSuccessType => ({type: CHANGE_CURRENT_VALUE, newValue});

export const setCount = () => async (dispatch: Function) => {
    const dataItem:number = await api.getCurrentValue();
    dispatch(setCountSuccess(dataItem))
};
export const changeValue = (newValue:ICurrentValue) => async (dispatch: Function) => {
    const dataItem:number = await api.incCurrentValue(newValue);
    dispatch(changeCountSuccess(dataItem))
};
