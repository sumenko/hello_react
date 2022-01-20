import React, {useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title="Список постов"/>
        : 
        <h1 style={{textAlign: 'center'}}>no posts</h1>
      }
    </div>
  );
}

export default App;
