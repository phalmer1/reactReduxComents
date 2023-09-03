import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyInput from '../UI/Input/MyInput';
import MyButton from '../UI/button/MyButton';
import { addComent } from '../../store/actions/comentActions';
import Coment from '../coment/Coment';
import module from '../coments/coments.module.css'

const Coments = (postIndex) => {
    const coments = useSelector(state => state.coments.coments)
    const dispatch = useDispatch()

    const [newComent,setNewComent] = useState({
        index: postIndex.index,
        name: "Anakin Skywalker",
        photo: "https://media1.popsugar-assets.com/files/thumbor/_UDLEp7pQ-Uip4ow4R2SqdKL100=/fit-in/3072x2042/filters:format_auto():quality(85):upscale()/2019/04/18/769/n/1922283/eeb8651e5cb8b3908543d8.33607707_.jpg",
        nickname: "@dart_vader",
        content: "",
        date: "",
        likes:0,
        id: Date.now(),
    })
    
    const changeComent = (event) => {
        const {name,value} = event.target;
        setNewComent((prevPost) => ({
            ...prevPost,
            [name] : value
        }))
    }

    const addNewComent = (event) => {
        event.preventDefault()
        dispatch(addComent(newComent))
        setNewComent({
            index: postIndex.index,
            name: "Anakin Skywalker",
            photo: "https://media1.popsugar-assets.com/files/thumbor/_UDLEp7pQ-Uip4ow4R2SqdKL100=/fit-in/3072x2042/filters:format_auto():quality(85):upscale()/2019/04/18/769/n/1922283/eeb8651e5cb8b3908543d8.33607707_.jpg",
            nickname: "@dart_vader",
            content: "",
            date: "",
            likes:0,
            id: Date.now(),
        })
    }
    
    return (
        <div>
            <div>
                {coments.map((coment,i) =>postIndex.index===coment.index?<Coment key={i} coment={coment}></Coment>:'')}
                <div className={module.coment_form}>
                    <MyInput placeholder='Add coment' name = 'content' value = {newComent.content} type = 'text' onChange = {changeComent}/>
                    <MyButton onClick={addNewComent}>Add coment</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Coments;