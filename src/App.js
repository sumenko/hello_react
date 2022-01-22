import React, {useMemo, useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';
import TablePrint from './components/TablePrint';
import PostFilter from './components/PostFilter';

function App() {
  // entry point
  const [posts, setPosts] = useState([
    {title: '1О котиках', body: '3Котики бывают разные', id: 1},
    {title: '2О песиках', body: '2Пёсики тоже бывают разные', id: 2},
    {title: '3О змейках', body: '1Змейки тоже бывают разные', id: 3},
  ])
  //       состояние     функция изменяющая состояние   инициализация
  const [filter, setFilter] = useState({sort: '', query: ''})

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) =>{setPosts(posts.filter(p => p.id !== post.id))}
  
  
  const sortedPosts = useMemo( () => {
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [posts, filter.sort])
  
  const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLocaleLowerCase()));
      }, [filter.query, sortedPosts]) 
 

  return (
    <div className="App">
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>

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
