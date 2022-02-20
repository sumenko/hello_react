import React, {useMemo, useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';
import TablePrint from './components/TablePrint';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  // entry point
  const [posts, setPosts] = useState([
    {title: 'О котиках', body: 'Котики бывают разные', id: 1},
    {title: 'О песиках', body: 'Пёсики тоже бывают разные', id: 2},
    {title: 'О змейках', body: 'Змейки тоже бывают разные', id: 3},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
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
      <MyButton style={{marginTop:30}} onClick={() => setModal(true)}>Create post</MyButton>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
      {/* <TablePrint 
          head={['Наименование', <div>q<sub>нор</sub></div>, <div>&gamma;<sub>f</sub></div>, <div>q<sub>расч</sub></div>]}
          data={[
            ['Битумная черепица "стандарт"', '8', '1.3', '9.6'],
            ['Настил из ОСП-3', '20', '1.05', '21'], 
          ]}/> */}
      </MyModal>
            {sortedAndSearchedPosts.length !== 0
                ? 
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
                :
                <h1 style={{textAlign: 'center'}}>no posts</h1>
              }
              <div>
      
          <br/>
      </div>
    </div>
  );
}

export default App;
