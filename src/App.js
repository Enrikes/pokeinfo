import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import PokeGrid from './components/pokeGrid';

function App() {
  return (
    <div className='App'>
      <Header />
      <PokeGrid />
    </div>
  );
}

export default App;
