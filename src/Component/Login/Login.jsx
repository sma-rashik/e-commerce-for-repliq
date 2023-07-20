import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialAuth from "../SocialAuth/SocialAuth";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleLogin = (data) => {
    const { email, password } = data;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have been logged in successfully!",
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password.",
        });
      });
  };

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user, navigate]);
  useEffect(() => {
    document.title = "CricDemy | Login";
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 ${
                  errors.email ? "border-red-500" : ""
                }`}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
                <div
                  className="cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <FaEyeSlash className="text-gray-400" />
                  ) : (
                    <FaEye className="text-gray-400" />
                  )}
                </div>
              </div>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                required
                placeholder="*******"
                className={`w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900 ${
                  errors.password ? "border-red-500" : ""
                }`}
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-700 w-full rounded-md py-3 text-white"
            >
              Login
            </button>
          </div>
        </form>
        <div className="space-y-1">
          <button
            className="text-xs hover:underline hover:text-blue-700
           text-gray-400"
          >
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <SocialAuth />
        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-blue-700 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
