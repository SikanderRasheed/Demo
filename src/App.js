import './App.css';
import Banner from './components/Banner';
import Counter from './components/Counter';
import Design from './components/Design';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Counter/>
      <Design/>
    </div>
  );
}

export default App;
