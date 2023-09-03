
import { ADD_POST,ADD_LIKE } from "../actionTypes/postActionTypes"

export const addPost = (payloader) =>  {
    return {
        type: ADD_POST,
        payloader
    }
}
export const addLike = (index,isLiked) => {
    return{
        type: ADD_LIKE,
        index,
        isLiked,
    }
}