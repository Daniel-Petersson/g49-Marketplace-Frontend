import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import AdvertisementContainer from "./components/AdvertisementContainer";
import CreateAdvertisement from "./components/CreateAdvertisement";
import CreateUserProfile from "./components/CreateUserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AdvertisementContainer />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/create-advertisement" element={<CreateAdvertisement />} />
          <Route path="/create-userprofile" element={<CreateUserProfile/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
