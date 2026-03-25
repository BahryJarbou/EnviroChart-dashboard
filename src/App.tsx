import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-8">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
