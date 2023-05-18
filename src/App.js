import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem Ipsum Doler Sit Amit.
          Intro to Modern React JS
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.google.com
        </a>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          CI/CD using Jenkins & Argo CD
        </a>
      </header>
    </div>
  );
}

export default App;
