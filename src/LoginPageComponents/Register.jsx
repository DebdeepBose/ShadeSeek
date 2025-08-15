import LoginForm from "./LoginForm";
import Card from "./LandingIcon";

function Register() {
  return (
    <section id="topDiv" className="w-screen h-[100vh] bg-black flex-shrink flex-col justify-center items-center">
      <LoginForm />
      <Card/>
    </section>
  );
}

export default Register;
