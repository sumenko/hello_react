import React, {useState, useRef} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;
