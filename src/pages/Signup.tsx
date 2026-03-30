import { useState } from "react";
import { useNavigate } from "react-router";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (username.trim() && password.trim()) {
      localStorage.setItem("user", username.trim());
      localStorage.setItem("password", password);
      localStorage.setItem("loggedIn", "true");
      navigate("/");
    }
  };

  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-6xl font-semibold mb-4 text-center text-green-500">
        Welcome to EnviroChart!
      </h2>
      <div className="bg-white dark:bg-gray-800 p-7 rounded shadow w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 rounded mb-4 dark:bg-gray-700"
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          className="w-full p-2 rounded mb-4 dark:bg-gray-700"
        />
        <button
          onClick={handleSignup}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Sign Up
        </button>
      </div>
      <p>
        already signed up?{" "}
        <button
          className="bg-transparent hover:text-blue-400 hover:cursor-grab"
          onClick={() => navigate("/login")}
        >
          login here
        </button>
      </p>
    </div>
  );
};

export default Signup;
