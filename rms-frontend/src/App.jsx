import "./App.css";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeAdd from "./component/EmployeeAdd";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />}></Route>
          <Route path="/employees" element={<ListEmployeeComponent />}></Route>
          <Route path="/add-employee" element={<EmployeeAdd />}></Route>
          <Route path="/update-employee/:id" element={<EmployeeAdd />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
