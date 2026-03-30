import { Route, Routes } from "react-router";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import Login from "./pages/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Signup from "./pages/Signup";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Routes>
        // sign up route
        <Route path="signup" element={<Signup />} />
        // login route
        <Route path="login" element={<Login />} />
        // protected route
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div className="flex bg-gray-50 dark:bg-gray-900">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
                  <main className="p-8 bg-gray-50 dark:bg-gray-900">
                    <Dashboard />
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
