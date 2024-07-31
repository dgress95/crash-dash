import { auth, provider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import "./auth.css";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
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

export default Auth;
