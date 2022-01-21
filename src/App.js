import React, {useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';
import MySelect from './components/UI/select/MySelect';
import TablePrint from './components/TablePrint';

function App() {
  const [posts, setPosts] = useState([
    {title: 'О котиках', body: 'Котики бывают разные', id: 1},
    {title: 'О песиках', body: 'Пёсики тоже бывают разные', id: 2},
    {title: 'О птичках', body: 'Птички тоже бывают разные', id: 3},
  ])
  const [selectedSort, setSelectedSort] = useState('')
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px'}}/>
      <div>
          <MySelect 
              defaultValue='Сортировать'
              options={[
                {value: 'title', name: 'по названию'},
                {value: 'body', name: 'по описанию'}
              ]}
            />
      </div>
      {posts.length !== 0
        ?
        <PostList remove={removePost} posts={posts} title="Список постов"/>
        : 
        <h1 style={{textAlign: 'center'}}>no posts</h1>
      }
      <div>
          <br/>
          <TablePrint 
              head={['Наименование', <div>q<sub>нор</sub></div>, <div>&gamma;<sub>f</sub></div>, <div>q<sub>расч</sub></div>]}
              data={[
                ['Битумная черепица "стандарт"', '8', '1.3', '9.6'],
                ['Настил из ОСП-3', '20', '1.05', '21'],
                
              ]}/>
      </div>
    </div>
  );
}

export default App;
