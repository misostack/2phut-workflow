import { useState } from "react";
import nextjsvietnamLogo from "./assets/nextjsvietnam.svg";
import Workflow from "./components/WorkFlow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-full">
        <Workflow></Workflow>
      </div>
    </>
  );
}

export default App;
