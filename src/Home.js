import logo from './logo.svg';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Simulate trading analytics APP</code>
        </p>
        <a className="App-link" href="/return" rel="noopener noreferrer">
          Let get started...
        </a>
      </header>
    </div>
  );
}

export default Home;
