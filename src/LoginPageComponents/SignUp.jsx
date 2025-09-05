import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./LoginButton.css"; 
import "./FloatingLabel.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center bg-black/85">
      <div className="relative w-[400px] p-10 bg-black/90 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
        <p className="login-gradient mb-8 text-center text-xl font-bold tracking-wide">
          Sign Up
        </p>

        <form className="space-y-6" onSubmit={handleSignup}>
          <div className="user-box">
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="user-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="login-btn relative w-full block text-center px-5 py-3 font-bold text-sky-500 text-[16px] overflow-hidden transition-all duration-500 hover:bg-sky-500 hover:text-white rounded-sm hover:rounded-md"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupForm;
