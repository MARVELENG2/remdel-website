import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError("Invalid email or password.");
    } else {
      navigate("/admin/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-sm">
        <h1 className="font-display font-bold text-2xl text-navy-950 text-center">
          REMDEL Admin
        </h1>
        <p className="text-center text-ink-500 text-sm mt-1 mb-6">
          Log in to manage projects
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-black/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-black/10 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-900"
          />

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm py-3 rounded-md transition-colors disabled:opacity-60"
          >
            {loading ? "Logging in..." : "LOG IN"}
          </button>
        </form>
      </div>
    </div>
  );
}