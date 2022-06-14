import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Pages/Dashboard";
import Recipes from "./Components/Store/Recipes";
import 'antd/dist/antd.min.css';
import Beauty from "./Components/Store/Beauty";
import NavBar from "./Components/Pages/NavBar";
import Login from "./Components/Pages/Login";


function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard/beauty" element={<Beauty />} />
        <Route path="/dashboard/recipes" element={<Recipes />} />
       <Route path="/login" element={<Login/>}/>
      </Routes>

    </>
  );
}

export default App;
