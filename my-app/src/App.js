import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import './App.css';
import Nav from './components/Nav.jsx';
import Recipes from './components/Recipes.jsx';
import Inventory from './components/Inventory.jsx';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className='main'>
        <Inventory></Inventory>
        <Recipes></Recipes>
      </div>


    </div>
  );
}

export default App;
