import logo from './logo.svg';
import './App.css';
import suma from './utils/sum.js';

var MyArray = [2,4,6,8,10,12];
var result=suma(...MyArray);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          El resultado de la operacion "sum" es: {result}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
