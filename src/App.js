import React from "react";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import TabbedContent from "./Components/TabbedContent/TabbedContent";

import "./App.css";

function App() {
  const myProduct = {
    name: "Điện Thoại ",
    price: "1 tỷ",
    description: "Điện thoại ",
    imageUrl: "minhhoa.img",
  };

  return (
    <div className="app-container">
      {}

      <TabbedContent />
    </div>
  );
}

export default App;
