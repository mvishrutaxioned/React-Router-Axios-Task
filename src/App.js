import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comments';
import Albums from './components/Albums/Albums';
import SinglePost from './components/Posts/SinglePost';
import SingleAlbum from './components/Albums/SingleAlbum';
import SingleComment from './components/Comments/SingleComment';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/albums/:id" element={<SingleAlbum />} />
          <Route path="/comments/:id" element={<SingleComment />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  const homeStyle = {
    marginTop: '50px',
    fontWeight: '600',
    fontSize: '34px',
  }
  return (
    <div className="wrapper">
      <h2 style={homeStyle}>This is Home Page</h2>
    </div>
  )
}

export default App;
