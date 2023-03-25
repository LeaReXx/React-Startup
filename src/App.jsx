import React from "react";
import AboutServices from "./about-services/about-services";
import Header from "./header/header";
import AboutInvesting from "./about-investing/about-investing";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutServices />
      <AboutInvesting />
    </div>
  );
}

export default App;
