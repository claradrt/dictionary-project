import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="text-center mb-3">Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="text-center mt-3">
          Open source code by Clara Dérot
        </footer>
      </div>
    </div>
  );
}
