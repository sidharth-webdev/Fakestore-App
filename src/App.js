
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import { Fakestore } from "./components/Fakestore";
function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/store" element={token ? <Fakestore /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;