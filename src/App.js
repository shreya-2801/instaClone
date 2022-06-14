import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Pages/Dashboard";
import Store from "./Components/Store/Store";
import "antd/dist/antd.css";
import Beauty from "./Components/Store/Beauty";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard/beauty" element={<Beauty />} />
        <Route path="/dashboard/recipes" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
