import React from "react";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { ButtonProvider } from "./Context/buttonContext";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <ButtonProvider>
      <Navbar />
      <Landing/>
      <Footer />
    </ButtonProvider>
  );
};

export default App;
