import { auth, provider } from "../../firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import "./auth.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = () => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <p>Get Loggin'! Sign in to Crash Dash</p>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export const SignOut = () => {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="log-out">
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};
