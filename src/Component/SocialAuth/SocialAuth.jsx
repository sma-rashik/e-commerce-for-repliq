import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { app } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";

const SocialAuth = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const savedUser = { name: user.displayName, email: user.email };
        fetch("https://school-project-server.vercel.app/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              navigate(from);
            }
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
    >
      <FcGoogle size={32} />
      <p>Continue with Google</p>
    </div>
  );
};

export default SocialAuth;
