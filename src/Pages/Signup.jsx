import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { publicInstance } from "../api/axios";
import "./Auth.css";

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const Signup = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState({ type: "", message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async ({ confirmPassword, ...values }) => {
    setStatus({ type: "", message: "" });

    try {
      const { data } = await publicInstance.post("auth/register", values);

      setStatus({
        type: "success",
        message: data?.message || "Account created successfully. Redirecting to login...",
      });

      setTimeout(() => {
        navigate("/login");
      }, 900);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.response?.data?.message ||
          "Signup failed. Please check your details and try again.",
      });
    }
  };

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <div className="auth-hero">
          <div>
            <span className="auth-badge">Get started</span>
            <h1>Create your account in a minute.</h1>
            <p>
              Join the app, create your profile, and connect to the API-backed
              auth flow with a polished signup experience.
            </p>
          </div>

          <div className="auth-points">
            <div className="auth-point">
              <strong>Quick registration</strong>
              <span>Send name, email, and password to `auth/register`.</span>
            </div>
            <div className="auth-point">
              <strong>Friendly validation</strong>
              <span>Built with React Hook Form and Zod for clear inline errors.</span>
            </div>
          </div>
        </div>

        <div className="auth-form-panel">
          <h2>Sign up</h2>
          <p>Create your new account to get started.</p>

          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {status.message ? (
              <div className={`status-message ${status.type}`}>{status.message}</div>
            ) : null}

            <div className="field-group">
              <label htmlFor="signup-name">Name</label>
              <input id="signup-name" type="text" placeholder="Your name" {...register("name")} />
              {errors.name ? <span className="field-error">{errors.name.message}</span> : null}
            </div>

            <div className="field-group">
              <label htmlFor="signup-email">Email</label>
              <input
                id="signup-email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email ? <span className="field-error">{errors.email.message}</span> : null}
            </div>

            <div className="field-group">
              <label htmlFor="signup-password">Password</label>
              <input
                id="signup-password"
                type="password"
                placeholder="Create a password"
                {...register("password")}
              />
              {errors.password ? (
                <span className="field-error">{errors.password.message}</span>
              ) : null}
            </div>

            <div className="field-group">
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <input
                id="signup-confirm-password"
                type="password"
                placeholder="Repeat your password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword ? (
                <span className="field-error">{errors.confirmPassword.message}</span>
              ) : null}
            </div>

            <button className="auth-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </section>
    </main>
  );
};
