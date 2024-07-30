import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { database } from "./firebaseConfig.js";
import { ref, set, onValue } from "firebase/database";
import LogEvent from "./components/LogEvent/LogEvent.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const developerId = "1";

  useEffect(() => {
    const dataRef = ref(database, "/crashes");
    onValue(
      dataRef,
      (snapshot) => {
        const newData = snapshot.val();
        if (newData) {
          setData(newData);
        } else {
          console.error("No data available");
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Crash Dash</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Crash count is {count}
        </button>
      </div>
      {/* <button onClick={writeData}>Log Crash</button> */}
      <LogEvent developerId={developerId} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
