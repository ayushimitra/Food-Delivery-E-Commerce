import React from "react";
import "./App.css";
import "./index.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import PlaceOrder from "./Pages/PlaceOrder";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Menu from "./Pages/Menu";
import Navbar from "./Components/Navbar"; // Import the Navbar component
import Footer from "./Components/Footer";
import MobileApp from "./Pages/MobileApp";
import ContactUs from "./Pages/ContactUs";
import Searchicon from "./Pages/searchIcon";
import UserList from "./Components/UserList";
import Dashboard from "./Pages/Dashboard";
import LogIn from "./Pages/LogIn";

const App = () => {
  return (
      <div className="consistent-scrollbar">
        <Navbar />
        
        <div className="w-[80%] mx-auto"> {/* Center the content */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Searchicon />} />
            <Route path="/mobileapp" element={<MobileApp />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order" element={<PlaceOrder />} />
          <Route path="/signup" element={<SignUp/>}/>
             <Route path="/users" element={<UserList />}/>
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </div>
    <div className=" ">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/mobileapp" element={<MobileApp />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users" element={<UserList />}/>
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer className="w-screen" />
        </BrowserRouter>
        </div>
    </div>
  );
};


export default App;
