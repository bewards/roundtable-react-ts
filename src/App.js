import logo from './logo.svg';
import './App.scss';
import Photos from "./components/Photos/Photos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Roundtable: TypeScript Basics
        </p>
      </header>
      <Photos />
    </div>
  );
}

export default App;
