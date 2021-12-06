import "./App.css";
import Dictionary from "./Dictionary.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1 className="text-center mt-2">Dictionary</h1>
        </header>
        <Dictionary />
        <footer className="text-center mt-3">
          <a
            href="https://github.com/claradrt/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            Open source code
          </a>{" "}
          by Clara Dérot
        </footer>
      </div>
    </div>
  );
}
