import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hello World</header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small className="App-footer">Coded by Aino</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
