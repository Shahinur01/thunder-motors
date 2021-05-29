import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import styled from 'styled-components'
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
