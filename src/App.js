import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CommonCards from './pages/CommonCards';
import SingleCard from './pages/SingleCard';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:term" element={<CommonCards />} />
          <Route path="/:term/:id" element={<SingleCard />} />
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
