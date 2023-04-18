import Dictionary from "./Dictionary";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <i className="fa-solid fa-spell-check fa-2xl App-logo"></i>
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer"><small>Coded by Viv and is Open-sourced</small></footer>
      </div>
    </div>
  );
}
