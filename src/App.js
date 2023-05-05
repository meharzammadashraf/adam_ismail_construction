import logo from "./logo.svg";
import "./App.css";
import Login from "./components/loginPage/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/mainPage/homePage/index";
import Navbar from "./components/mainPage/homePage/homePage";
import Code from "./components/code/code";
import StaffCode from "./components/staffCode/staffCode";
import BloodGroup from "./components/bloodGroup/bloodGroup";
import DynamicLastPage from "./components/dynamicLastPage/dynamicLastPage";

function App() {
  return (
    <div>
      {/* <Login /> */}

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />}> */}
          <Route index element={<Login />} />
          <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<Home />} />
            <Route path="/home/code" element={<Code />} />
            <Route path="/home/code/lastpage/:id" element={<DynamicLastPage />} />
            <Route path="/home/staffcode" element={<StaffCode />} />
            <Route path="/home/bloodgroup" element={<BloodGroup />} />
            {/* <Route path="practice3" element={<Practice3 />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
