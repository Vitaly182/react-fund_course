import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description 1'},
    {id: 2, title: 'Javascript 2', body: 'Description 2'},
    {id: 3, title: 'Javascript 3', body: 'Description 3'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  //Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }



  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title='Посты про JS' />
    </div>
  );
}

export default App;
