import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      console.log("🔹 Login data being sent:", data);

      const session = await authService.login(data);
      console.log("🔹 Session response from Appwrite:", session);

      if (session) {
        const userData = await authService.getCurrentUser();
        console.log("🔹 Current user data:", userData);

        if (userData) {
          console.log("✅ User logged in and stored in Redux");
          dispatch(authLogin(userData));
        } else {
          console.warn("⚠️ No user data returned from Appwrite");
        }

        navigate("/");
      } else {
        console.warn("⚠️ No session created! Check credentials.");
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="flex justify-center mb-2">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-2xl font-bold text-center">
          Sign in to your account
        </h2>
        <p className="mt-2 text-base text-center text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium transition-all duration-200 text-primary hover:underline"
          >
            Sign Up
          </Link>
        </p>

        {error && <p className="mt-8 text-center text-red-600">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Enter a valid Email",
                },
              })}
            />
            <Input
              label="Password:"
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
