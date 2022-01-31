import Header from './components/Header';
import Posts from './components/Posts/Posts';
import Photos from './components/Photos/Photos';
import Comments from './components/Comments/Comments';
import Albums from './components/Albums/Albums';
import SinglePost from './components/Posts/SinglePost';
import SinglePhoto from './components/Photos/SinglePhoto';
import SingleAlbum from './components/Albums/SingleAlbum';
import SingleComment from './components/Comments/SingleComment';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/posts/:id" element={<SinglePost />} />
          <Route path="/photos/:id" element={<SinglePhoto />} />
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
