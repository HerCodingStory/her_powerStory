import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate.push("/Dashboard");
  }, [user, loading]);

  return (
      <div className="login reveal-from-bottom">
        <div className="login__container cta-inner section-inner">
          <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
          />
          <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
          />
          <button
              className="login__btn"
              onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button className="login__btn login__google" onClick={signInWithGoogle}>
            Login with Google
          </button>
          <div className="login__forgot">
            <Link to="/Reset">Forgot Password</Link>
          </div>
          <div>
            <p className="login__text">Don't have an account? <Link to="/Register">Register</Link> now.</p>
          </div>
        </div>
      </div>
  );
}
export default Login;