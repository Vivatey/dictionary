import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <i className="fa-solid fa-spell-check fa-2xl App-logo"></i>
            Dictionary
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Viv and is
            <a
              href="https://github.com/Vivatey/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
