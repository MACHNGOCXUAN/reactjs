import "./App.css";
import ListProduct from "./components/ListProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Filter from "./components/Filter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Filter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
