import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialAuth from "../SocialAuth/SocialAuth";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { createUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (data) => {
    const { name, photoURL, email, password } = data;

    // Password validation
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Password should be at least 6 characters long.",
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Password should contain at least one capital letter.",
      });
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Password should contain at least one special character.",
      });
      return;
    }

    try {
      const result = await createUser(email, password);
      const user = result.user;
      const savedUser = {
        name: name,
        email: email,
        photoURL: photoURL,
      };

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
            // Show SweetAlert success alert
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registration Successful",
              text: "You have been registered successfully!",
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
    navigate(from);
  };

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user, navigate, from]);

  useEffect(() => {
    document.title = "CricDemy | Sign Up";
  }, []);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to CricDemy</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>
            <div>
              <label htmlFor="photoURL" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                type="url"
                {...register("photoURL")}
                id="photoURL"
                placeholder="Enter Your Photo URL"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
              {errors.email && <p>This field is required</p>}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                {...register("password", { required: true })}
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
              {errors.password && <p>This field is required</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-700 w-full rounded-md py-3 text-white"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <SocialAuth />
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-blue-700 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
