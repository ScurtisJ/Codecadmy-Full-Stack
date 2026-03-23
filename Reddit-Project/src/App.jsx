import Header from './components/Header';
import SubredditNav from './features/subreddits/SubredditNav';
import PostsList from './features/posts/PostsList';
import PostDetail from './features/postDetail/PostDetail';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <SubredditNav />
      <main className="main-content">
        <PostsList />
        <PostDetail />
      </main>
    </div>
  );
}

export default App;
