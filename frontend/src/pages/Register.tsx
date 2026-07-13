import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { authApi } from "../api/auth";
import { ApiError } from "../api/client";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");

    try {
      await authApi.register({ name, email, password });
      await authApi.login({ email, password });
      navigate("/");
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Registration failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg p-8 w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-indigo-600">
          Create an account
        </h1>

        {error && (
          <p className="text-red-600 text-sm mb-4">{error}</p>
        )}

        <label className="block mb-2 font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Rajesh"
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full border rounded-lg px-3 py-2 mb-4"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="At least 6 characters"
          className="w-full border rounded-lg px-3 py-2 mb-6"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Register
        </button>

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
