import { useState } from "react";
import { auth, gProvider } from "../config/firebaseLGN";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const Auth = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const SignIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const SignInWG = async () => {
    await signInWithPopup(auth, gProvider );
  };
  return (
    <div className="flex items-center justify-center pt-3 gap-3">
      <input
        placeholder="Email"
        className=" border-teal-600 border-4"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        className=" border-teal-600 border-4"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className=" h-10 w-[100px] border border-teal-600" onClick={SignIn}>
        Sign IN
      </button>

      <button className=" h-10 w-[100px] border border-teal-600" onClick={SignInWG}>
        GuluGulu
      </button>
    </div>
  );
};
