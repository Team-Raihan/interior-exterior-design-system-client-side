import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesPath from "./Components/Routers/Routes";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[85vh]">
        <RoutesPath />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
