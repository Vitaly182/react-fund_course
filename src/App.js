import React, { useMemo, useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description 3'},
    {id: 2, title: 'Javascript 3', body: 'Description 1'},
    {id: 3, title: 'Javascript 2', body: 'Description 2'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(() => {
    console.log('Отработала функция getSortedPosts()')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

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
      <hr style={{margin: '15px 0'}} />
      <PostFilter 
        filter={filter} 
        setFilter={setFilter} 
      />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title='Посты про JS' />
    </div>
  );
}

export default App;
