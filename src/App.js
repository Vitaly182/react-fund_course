import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description 1'},
    {id: 2, title: 'Javascript 2', body: 'Description 2'},
    {id: 3, title: 'Javascript 3', body: 'Description 3'},
  ])

  const [post, setPost] = useState({title: '', body: ''})


  // const bodyInputRef = useRef();


  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput 
          value={post.title}
          onChange={e => setPost({...post,  title: e.target.value})}
          type='text' 
          placeholder='Название поста' 
        />
        <MyInput 
          value={post.body}
          onChange={e => setPost({...post,  body: e.target.value})}
          type='text' 
          placeholder='Описание поста' 
        />
        {/* Неуправляемый\Неконтролируемый компонент */}
        {/* <MyInput 
          ref={bodyInputRef}
          type='text' 
          placeholder='Описание поста' 
        /> */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Посты про JS' />
    </div>
  );
}

export default App;
