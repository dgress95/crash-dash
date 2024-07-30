import { useEffect, useState } from "react";
import "./App.css";
import { database } from "./firebaseConfig.js";
import { ref, set, onValue } from "firebase/database";
import LogEvent from "./components/LogEvent/LogEvent.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const developerId = "1";
  // const length = Object.keys(data).length;

  useEffect(() => {
    const dataRef = ref(database, "/crashes");
    onValue(
      dataRef,
      (snapshot) => {
        const newData = snapshot.val();
        console.log(newData);
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
      <h1>Crash Dash</h1>
      <Dashboard />
      <LogEvent developerId={developerId} eventName={"AVD Crash"} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default App;
