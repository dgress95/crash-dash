import { ref, push } from "firebase/database";
import { database } from "./firebaseConfig";

const logCrash = (developerId) => {
  const crashRef = ref(database, "crashes");
  push(crashRef, {
    timestamp: Date.now(),
    developerId,
  });
};

export { logCrash };
