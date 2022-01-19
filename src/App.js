import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';

function App() {
  const [posts_1, setPOsts_1] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description 1'},
    {id: 2, title: 'Javascript 2', body: 'Description 2'},
    {id: 3, title: 'Javascript 3', body: 'Description 3'},
  ])
  const [posts_2, setPOsts_2] = useState([
    {id: 1, title: 'Python 1', body: 'Description 1'},
    {id: 2, title: 'Python 2', body: 'Description 2'},
    {id: 3, title: 'Python 3', body: 'Description 3'},
  ])


  return (
    <div className="App">
      <form>
        <input type='text' placeholder='Название поста' />
        <input type='text' placeholder='Описание поста' />
        <button>Создать пост</button>
      </form>
      <PostList posts={posts_1} title='Посты про JS' />
      <PostList posts={posts_2} title='Посты про Python' />
    </div>
  );
}

export default App;
