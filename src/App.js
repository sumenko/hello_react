import React, {useMemo, useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';
import TablePrint from './components/TablePrint';
import PostFilter from './components/PostFilter';

function App() {
  // entry point
  const [posts, setPosts] = useState([
    {title: 'О котиках', body: 'Котики бывают разные', id: 1},
    {title: 'О песиках', body: 'Пёсики тоже бывают разные', id: 2},
    {title: 'О змейках', body: 'Змейки тоже бывают разные', id: 3},
  ])
<<<<<<< HEAD
  //       состояние     функция изменяющая состояние   инициализация
  const [selectedSort, setSelectedSort] = useState('')
  
=======

  const [filter, setFilter] = useState({sort: '', query: ''})
>>>>>>> 263bdbcfcad12429d6ad505bd22a6305ccd98d50
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) =>{setPosts(posts.filter(p => p.id !== post.id))}
  
  
  const sortedPosts = useMemo( () => {
    if(selectedSort){
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [posts, selectedSort])
  
  const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()));
      }, [searchQuery, sortedPosts]) 
 

  return (
    <div className="App">
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostForm create={createPost}/>
    {sortedAndSearchedPosts.length !== 0
        ? 
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
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
