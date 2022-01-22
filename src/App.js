import React, {useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';
import MySelect from './components/UI/select/MySelect';
import TablePrint from './components/TablePrint';
import MyInput from './components/UI/input/MyInput';

function App() {
  // entry point
  const [posts, setPosts] = useState([
    {title: 'О котиках', body: 'Котики бывают разные', id: 1},
    {title: 'О песиках', body: 'Пёсики тоже бывают разные', id: 2},
    {title: 'О змейках', body: 'Змейки тоже бывают разные', id: 3},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) =>{setPosts(posts.filter(p => p.id !== post.id))}
  
  function getSortedPosts(){
    console.log('СОРТИРОВКА') 
    if(selectedSort){
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
      
    }
    return posts;
  }

  const sortedPosts = getSortedPosts()
  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }
 

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <MyInput
          value={searchQuery}
          placeholder='поиск поста'
          onChange={(e) => setSearchQuery(e.target.value)}
      />
        
      <hr style={{margin: '15px 0px'}}/>
      <div>
          <MySelect 
              value={selectedSort}
              defaultValue='Сортировать'
              onChange={sortPosts}
              options={[
                {value: 'title', name: 'по названию'},
                {value: 'body', name: 'по описанию'},
              ]}
            />
      </div>
      {posts.length !== 0
        ? 
        <PostList remove={removePost} posts={sortedPosts} title="Список постов"/>
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
