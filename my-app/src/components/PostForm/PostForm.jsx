import React, { useState } from 'react';
import MyInput from '../UI/Input/MyInput';
import { addPost } from '../../store/actions/postActions';
import { useDispatch } from 'react-redux';
import module from '../PostForm/postForm.module.css'
import MyButton from '../UI/button/MyButton';

const PostForm = ({setIsModal}) => {
    const dispatch = useDispatch()

    const [newPost,setNewPost] = useState({
        name: "",
        photo: "",
        nickname: "",
        content: "",
        image: "",
        date: "",
        likes:0,
        id: Date.now(),
    })
    
    const changePost = (event) => {
        const {name,value} = event.target;
        setNewPost((prevPost) => ({
            ...prevPost,
            [name] : value
        }))
    }

    const createPost = (event) => {
        event.preventDefault()
        dispatch(addPost(newPost))
        setNewPost({
            name: "",
            photo: "",
            nickname: "",
            content: "",
            image: "",
            date: "",
            likes:11,
            id: Date.now(),
        })
        
        setIsModal(false)
    }
   
    
    return (
        
        <form>
            <div className={module.post__form}>
                <MyInput placeholder="Add your name" name='name' value={newPost.name} type='text' onChange={changePost}/>
                <textarea style={{fontSize:'18px',fontWeight:'700'}} placeholder="Add content" className={module.text__area} name='content' value={newPost.content} onChange={changePost}></textarea>
                <MyButton onClick={createPost}>Add Post</MyButton>
            </div>
        </form>
    );
};

export default PostForm;