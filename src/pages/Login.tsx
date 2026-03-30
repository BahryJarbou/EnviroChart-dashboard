import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = localStorage.getItem("user");
    console.log(user);
    const enteredPassword = localStorage.getItem("password");
    console.log(enteredPassword);
    if (username.trim() && password.trim()) {
      if (user === username && enteredPassword === password) {
        navigate("/");
        localStorage.setItem("loggedIn", "true");
      } else {
        setWrong(true);
      }
    } else {
      setWrong(true);
    }
  };

  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-7 rounded shadow w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

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
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded mb-4 dark:bg-gray-700"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 hover:bg-green-700 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
      <p className={`text-red-500 ${wrong ? "opacity-100" : "opacity-0"}`}>
        wrong username or password
      </p>
    </div>
  );
};

export default Login;
