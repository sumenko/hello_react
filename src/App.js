import React, {useEffect, useMemo, useState} from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';
import TablePrint from './components/TablePrint';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import axios from 'axios';
import PostService from './API/PostService';

function App() {
  // entry point
  const [posts, setPosts] = useState([ ])
  //       состояние     функция изменяющая состояние   инициализация
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  useEffect(() => {
    fetchPosts()
  }, [])
  
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    const posts = await PostService.getAll();
    setPosts(posts);
  }

  const removePost = (post) =>{setPosts(posts.filter(p => p.id !== post.id))}

  return (
    <div className="App">
      <MyButton style= {{marginTop: 30}} onClick={() => setModal(true)}>Создать</MyButton>
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyButton style={{marginTop: 15}} onClick={fetchPosts}>Fetch posts</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost}/>
      </MyModal>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>

      <div>
          <br/>
      </div>
    </div>
  );
}

export default App;
