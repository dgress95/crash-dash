import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const SignOut = ({ setIsAuth }) => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      cookies.remove("auth-token");
      setIsAuth(false);
      console.log("sign out successful");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="log-out">
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default SignOut;
