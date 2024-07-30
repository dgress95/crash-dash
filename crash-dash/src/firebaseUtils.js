import { useEffect, useState } from "react";
import { ref, push, onValue } from "firebase/database";
import { database } from "./firebaseConfig";

const logCrash = (developerId) => {
  const crashRef = ref(database, "crashes");
  push(crashRef, {
    timestamp: Date.now(),
    developerId,
  });
};

const useCrashes = () => {
  const [crashes, setCrashes] = useState([]);

  useEffect(() => {
    const crashRef = ref(database, "crashes");
    onValue(crashRef, (snapshot) => {
      const data = snapshot.val();
      const crashesList = data ? Object.values(data) : [];
      setCrashes(crashesList);
    });
  }, []);

  return crashes;
};

export { logCrash, useCrashes };
