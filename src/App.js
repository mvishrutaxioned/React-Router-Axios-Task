import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Posts from './components/Posts';
import Post from './components/Post';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      </Router>
    </div>
  );
}

export default App;
