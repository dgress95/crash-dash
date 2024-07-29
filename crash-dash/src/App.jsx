import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { database } from "./firebaseConfig.js";
import { ref, set, onValue } from "firebase/database";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, "/");
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

  // Function to write data to the database
  const writeData = () => {
    set(ref(database, "/"), {
      example: "This is an example",
    });
  };

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click here</p>
      <button onClick={writeData}>Write Data</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
