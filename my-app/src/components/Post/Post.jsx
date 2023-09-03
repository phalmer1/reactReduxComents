import React, { useState } from "react";
import module from "./Post.module.css";
import { useDispatch } from "react-redux";
import { addLike } from "../../store/actions/postActions";
import MyModal from "../UI/modal/MyModal";
import Coments from "../coments/Coments";



const Post = ({post,index}) => {

  const dispatch = useDispatch()

  const handleAddLike = () => {
    dispatch(addLike(index,!isLiked))
    setIsLiked(!isLiked)
  }
  const [isLiked,setIsLiked] = useState(false)

  const [onModal,setOnModal] = useState(false)



  return (
    <main>
    <div className={module.post__container}>
      <div className={module.img__container}>
        <span className={module.img__span}>
          <img src={post.photo} alt="Icon" />
        </span>
      </div>
      <div className={module.content__data}>
        <div className={module.data}>
          <div className={module.author__data}>
            <span>
              {post.name}
              <i
                style={{ marginLeft: "5px" }}
                className="fas fa-check-circle"
              ></i>
            </span>
          </div>
          <div className={module.author__data}>
            <span className={module.span__data}>{post.nickname}</span>
          </div>
          <div className={module.author__data}>
            <span className={module.span__data}>{post.date}</span>
          </div>
        </div>
        <div className={module.content__text}>{post.content}</div>
        <div className={module.content__image}><img src={post.image} alt="" /></div>
        <div className={module.activity__content}>
        <button onClick={handleAddLike}><i class="fa-regular fa-heart"> <span style={{paddingLeft:"5px"}}>{post.likes}</span> </i></button>
        <button onClick={() => setOnModal(true)}><i class="fa-solid fa-share"><span style={{paddingLeft:"5px"}}>127</span></i></button>
        <i class="fa-regular fa-comment"><span style={{paddingLeft:"5px"}}>48</span></i>
        <i class="fa-solid fa-download"><span style={{paddingLeft:"5px"}}>Завантажити</span></i>
        </div>
        <MyModal visible = {onModal} setVisible = {setOnModal} >
          <Coments index = {index}/>
        </MyModal>
      </div>
      
    </div>
    </main>
  );
};

export default Post;
