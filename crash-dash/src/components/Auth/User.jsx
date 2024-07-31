import React, { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import "./user.css";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (user !== null) {
    const { displayName, email, photoURL, emailVerified, uid } = user;

    return (
      <div className="user-pill">
        {photoURL && (
          <img
            src={photoURL}
            alt={`${displayName}'s profile`}
            className="profile-image"
          />
        )}
        <div className="name-info">
          <h4>Crash Master</h4>
          <h3>{displayName}</h3>
        </div>
      </div>
    );
  } else {
    return <div>No user is signed in.</div>;
  }
};

export default User;
