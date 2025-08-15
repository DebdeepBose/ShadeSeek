import "./LoginButton.css";
import "./FloatingLabel.css"; // new css for floating labels

const LoginForm = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-gray-900">
      <div className="relative w-[400px] p-10 bg-black/90 rounded-lg shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
        <p className="login-gradient mb-8 text-center text-xl font-bold tracking-wide">
          Login
        </p>

        <form>
          {/* Email */}
          <div className="user-box">
            <input type="text" required />
            <label>Email</label>
          </div>

          {/* Password */}
          <div className="user-box">
            <input type="password" required />
            <label>Password</label>
          </div>

          {/* Animated button */}
          <a
            href="#"
            className="relative inline-block px-5 py-2 font-bold text-white text-[16px] uppercase tracking-[3px] overflow-hidden transition-all duration-500 hover:bg-white hover:text-[#272727] hover:rounded-md"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>

        <p className="text-gray-400 text-sm mt-6">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-white hover:text-gray-400 transition-colors"
          >
            Sign up!
          </a>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
