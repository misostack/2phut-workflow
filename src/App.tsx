import { useState } from "react";
import nextjsvietnamLogo from "./assets/nextjsvietnam.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://nextjsvietnam.com/" target="_blank">
          <img
            src={nextjsvietnamLogo}
            className="logo nextjsvietnam"
            alt="NextJSVietnam logo"
          />
        </a>
      </div>
      <h1>ReactJS Structure</h1>
    </>
  );
}

export default App;
