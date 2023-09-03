import { ADD_COMENT } from "../actionTypes/comentsActionTypes"

export const addComent = (coment) => {
    return{
        type: ADD_COMENT,
        coment
    }
}