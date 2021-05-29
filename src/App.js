import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small className="App-footer">
            Coded by{" "}
            <a
              class="footer"
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
