import "./App.css";
import Dictionary from "./Dictionary.js";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <img src={logo} className="App-logo" alt="logo" />
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="text-center">
          <small className="App-footer">
            Coded by{" "}
            <a
              className="footer"
              href="https://github.com/ainovi/dictionary-project"
            >
              Aino
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
