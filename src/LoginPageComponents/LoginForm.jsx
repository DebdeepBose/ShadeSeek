import { FaGoogle, FaApple, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./LoginButton.css";
import "./FloatingLabel.css";

const LoginForm = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-black/85">
      <div className=" relative w-[400px] p-10 bg-black/90 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
        <p className=" login-gradient mb-8 text-center text-xl font-bold tracking-wide">
          Login
        </p>

        <form className="space-y-6">
          <div className="user-box">
            <input type="text" required />
            <label>Email</label>
          </div>

          <div className="user-box">
            <input type="password" required />
            <label>Password</label>
          </div>

          <Link
            to="/home"
            className="login-btn  relative w-full block text-center px-5 py-3 font-bold text-sky-500 text-[16px] overflow-hidden transition-all duration-500 hover:bg-sky-500 hover:text-white rounded-sm hover:rounded-md"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Log In
          </Link>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-zinc-700"></div>
          <span className="px-3 text-sm text-zinc-400">or continue with</span>
          <div className="flex-grow h-px bg-zinc-700"></div>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <button className="p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
            <FaGoogle className="text-red-500 text-xl" />
          </button>
          <button className="p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
            <FaApple className="text-gray-200 text-xl" />
          </button>
          <button className="p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition">
            <FaTwitter className="text-sky-400 text-xl" />
          </button>
        </div>

        <Link to="/home">
          <button className="w-full border border-zinc-600 hover:bg-zinc-800 py-3 rounded-xl font-medium transition text-white">
            Continue as Guest
          </button>
        </Link>

        <p className="text-gray-400 text-sm mt-6 text-center">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-white hover:text-pink-500 transition-colors"
          >
            Sign up!
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
