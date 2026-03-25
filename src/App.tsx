import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex bg-gray-50 dark:bg-gray-900">
        {/* <div className="bg-white dark:bg-black text-black dark:text-white">
        Test Dark Mode
      </div> */}
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="p-8 bg-gray-50 dark:bg-gray-900">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
