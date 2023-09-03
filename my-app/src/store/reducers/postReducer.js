import { ADD_POST,ADD_LIKE } from "../actionTypes/postActionTypes";


const ANAKIN_IMAGE =
  "https://media1.popsugar-assets.com/files/thumbor/_UDLEp7pQ-Uip4ow4R2SqdKL100=/fit-in/3072x2042/filters:format_auto():quality(85):upscale()/2019/04/18/769/n/1922283/eeb8651e5cb8b3908543d8.33607707_.jpg";
const RAY_IMAGE =
  "https://www.slashfilm.com/img/gallery/can-the-return-of-rey-redeem-the-sins-of-star-wars-the-rise-of-skywalker/intro-1680978833.webp";



const initialState = {
    posts: [
        {
            index:1,
            name: "Anakin skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
            content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
            image: RAY_IMAGE,
            date: "26 лют.",
            likes:11,
        },
        {
            index:2,
            name: "Luke skywalker",
            photo: ANAKIN_IMAGE,
            nickname: "@dart_vader",
            content: "I don't know,realy... Ask C3PO.",
            image: RAY_IMAGE,
            date: "36 лют.",
            likes:11,
        },
    ]
}

export const postReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts,action.payloader]
            }
        case ADD_LIKE:
            return{
                ...state,
                posts: state.posts.map((post,index) => {
                    if(index===action.index){
                        return {...post,likes: action.isLiked?post.likes+1:post.likes-1}
                    }
                    return post
                })
            }
        default :
            return state
    }
}