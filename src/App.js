import React, {useState, useRef} from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import classes from './components/UI/input/MyInput.module.css'
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 1'},
    {id: 2, title: 'Python', body: 'Description 2'},
    {id: 3, title: 'C++', body: 'Description 3'},
    {id: 4, title: 'Rust', body: 'Description 4'},
  ])
  const [title, setTitle] = useState('');
  const bodyInputRef = useRef();
  const addNewPost = (e) => {
    e.preventDefault();
    console.log('title: ' + title);
    console.log('post: ' + bodyInputRef.current.value);
  }
  return (
    <div className="App">
      <form>
          <MyInput
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="subject" 
            type="text"/>
          <input 
            ref={bodyInputRef} 
            className={classes.myInput}
            placeholder='текс поста'
            type='text'/>

          {/* <MyInput placeholder="post text" type="text"/> */}
          <MyButton onClick={addNewPost}>Create</MyButton>
      </form>
      <PostList posts={posts} title="Список постов"/>
    </div>
  );
}

export default App;
