import React, { useRef, useEffect, useState } from "react";

const LoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleClear = () => {
    setEmail("");
    setPassword("");
    emailRef.current.focus();
    setLoggedIn(false);
  };

  const handleEmailKeyPress = (e) => {
    if (e.key === "Enter") passwordRef.current.focus();
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter both email and password.");
      return;
    }
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setPassword("");
    emailRef.current.focus();
  };

  return (
    <div className="login-container">
      <h2>{loggedIn ? "Welcome!" : "Login"}</h2>

      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleEmailKeyPress}
            required
          />

          <label>Password:</label>
          <input
            ref={passwordRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="btns">
            <button type="submit">Login</button>
            <button type="button" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      ) : (
        <div className="welcome">
          <p>You are now logged in as:</p>
          <strong>{email}</strong>
          <div className="btns">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;