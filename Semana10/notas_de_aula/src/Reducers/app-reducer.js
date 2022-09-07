import { useReducer } from "react";
const initialState = { tipList: [] }

function reducer(state, action) {

    switch (action.type) {
        case 'addTipToTipList':
            return { tipList: [...state.tipList, action.payload] }
        default:
            return state
    }
}
export const useTipReducer = () => {
    return useReducer(reducer, initialState)
}