import { ADD_COMENT } from "../actionTypes/comentsActionTypes";

const ANAKIN_IMAGE =
  "https://media1.popsugar-assets.com/files/thumbor/_UDLEp7pQ-Uip4ow4R2SqdKL100=/fit-in/3072x2042/filters:format_auto():quality(85):upscale()/2019/04/18/769/n/1922283/eeb8651e5cb8b3908543d8.33607707_.jpg";
const RAY_IMAGE =
  "https://www.slashfilm.com/img/gallery/can-the-return-of-rey-redeem-the-sins-of-star-wars-the-rise-of-skywalker/intro-1680978833.webp";


const initialState = {
    coments:[
        {   
            index:0,
            photo: ANAKIN_IMAGE,
            name: 'Anakin Skywalker',
            nickname: '@dart_vader',
            content: 'pofol nahoj',
            likes: 0
            
        },{
            index:1,
            photo: RAY_IMAGE,
            name: 'Ray Skywalker',
            nickname: '@new_skywalker',
            content: 'sam pafol',
            likes: 0
        }
    ]
}
export const comentsReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_COMENT:
            return{
                ...state,
                coments: [...state.coments,action.coment]
            }
        default:
            return state
    }
}
