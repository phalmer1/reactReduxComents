
import { useState } from 'react';
import './App.css';
import PostForm from './components/PostForm/PostForm';
import PostsList from './components/PostsLists';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {

  const [isModal,setIsModal] = useState(false)


  return (
    <div className="App">
      <div className='container'>
        <MyButton onClick={() => setIsModal(true)}>Add new post</MyButton>
        <MyModal visible={isModal} setVisible={setIsModal}>
        <PostForm setIsModal={setIsModal}/>
        </MyModal>
        <PostsList/>
      </div>
    </div>
  );
}

export default App;
