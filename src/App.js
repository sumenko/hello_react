import React, {useState} from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description 1'},
    {id: 2, title: 'Python', body: 'Description 2'},
    {id: 3, title: 'C++', body: 'Description 3'},
    {id: 4, title: 'Rust', body: 'Description 4'},
  ])
  return (
    <div className="App">
        {/* <PostItem post={{id: 1, title: 'Javascript', body: 'Description'}}/> */}
        <h1 style={{textAlign: 'center'}}>Список постов</h1>
        {posts.map(post =>
          <PostItem post={post} key={post.id}/>)}
    </div>
  );
}

export default App;
