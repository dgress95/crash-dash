import { useEffect, useState } from "react";
import "./App.css";
import { database } from "./firebaseConfig.js";
import { ref, set, onValue } from "firebase/database";
import LogEvent from "./components/LogEvent/LogEvent.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Header from "./components/Header/Header.jsx";
import { Auth } from "./components/Auth/Auth.jsx";
import { SignOut } from "./components/Auth/Auth.jsx";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [data, setData] = useState(null);
  const developerId = "1";
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

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

  if (!isAuth) {
    return (
      <div>
        <Auth />
      </div>
    );
  }
  return (
    <>
      <Header />
      <Dashboard />
      <LogEvent developerId={developerId} eventName={"AVD Crash"} />
      <SignOut />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
}

export default App;
