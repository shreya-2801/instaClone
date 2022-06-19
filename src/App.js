import { Route, Routes } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.min.css";
import Layout from "./layout/Layout";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
