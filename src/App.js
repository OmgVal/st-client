import './App.css';
// import Navbar from './components/partials/Navbar'
import Character from './components/routes/Character'
import Characters from './components/routes/Characters';
import EditCharacter from './components/routes/EditCharacter';
import Home from './components/routes/Home';
import NewCharacter from './components/routes/NewCharacter';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Characters />
        <Character />
        <NewCharacter />
        <EditCharacter />

    </div>
  );
}

export default App;
