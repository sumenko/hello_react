import React, {useState, useRef} from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import classes from './components/UI/input/MyInput.module.css'
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({title: '', body: ''})
  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }
  return (
    <div className="App">
      <form>
          {/* Управляемый компонент */}
          <MyInput
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value})}
            placeholder="subject" 
            type="text"/>

          {/* Неуправляемый неконтроллируемый компонент */}
          <MyInput                                  
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
            placeholder="post text" 
            type="text"/>
          <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
      <PostList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;