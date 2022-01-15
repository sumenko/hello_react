import React, {useState} from 'react';
import PostList from './components/PostList'
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 1'},
    {id: 2, title: 'Python', body: 'Description 2'},
    {id: 3, title: 'C++', body: 'Description 3'},
    {id: 4, title: 'Rust', body: 'Description 4'},
  ])
  let title = "Post list";
  return (
    <div className="App">
      <PostList posts={posts} title={title}/>
    </div>
  );
}

export default App;
