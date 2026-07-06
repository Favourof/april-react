import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { publicInstance } from "../api/axios";
import "./Auth.css";
import { authContext } from "../context/Auth/authContext";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const Login = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState({ type: "", message: "" });
  const { logIn } = useContext(authContext)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values) => {
    setStatus({ type: "", message: "" });

    try {
      const { data } = await publicInstance.post("auth/login", values);
      const token = data?.token || data?.data?.token;
      const user = data?.user || data?.data?.user;
      logIn({ user, token })


      setStatus({
        type: "success",
        message: data?.message || "Login successful. Redirecting now...",
      });

      setTimeout(() => {
        navigate("/product");
      }, 800);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.response?.data?.message ||
          "Login failed. Please check your details and try again.",
      });
    }
  };

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <div className="auth-hero">
          <div>
            <span className="auth-badge">Welcome back</span>
            <h1>Sign in and keep moving.</h1>
            <p>
              Access your dashboard, products, and profile with a clean
              authenticated session powered by the API.
            </p>
          </div>

          <div className="auth-points">
            <div className="auth-point">
              <strong>Fast login</strong>
              <span>Submit your credentials and keep your token in local storage.</span>
            </div>
            <div className="auth-point">
              <strong>Shared API setup</strong>
              <span>Uses the existing Axios instance pointed at `auth/login`.</span>
            </div>
          </div>
        </div>

        <div className="auth-form-panel">
          <h2>Login</h2>
          <p>Enter your email and password to continue.</p>

          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {status.message ? (
              <div className={`status-message ${status.type}`}>{status.message}</div>
            ) : null}

            <div className="field-group">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email ? <span className="field-error">{errors.email.message}</span> : null}
            </div>

            <div className="field-group">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                type="password"
                placeholder="Your password"
                {...register("password")}
              />
              {errors.password ? (
                <span className="field-error">{errors.password.message}</span>
              ) : null}
            </div>

            <button className="auth-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Login"}
            </button>
          </form>

          <p className="auth-switch">
            Don&apos;t have an account? <Link to="/signup">Create one</Link>
          </p>
        </div>
      </section>
    </main>
  );
};
