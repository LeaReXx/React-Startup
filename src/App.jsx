import React from "react";
import AboutServices from "./about-services/about-services";
import Header from "./header/header";
import AboutInvesting from "./about-investing/about-investing";
import MakeMoney from "./make-money/make-money";
function App() {
  return (
    <div className="App">
      <Header />
      <AboutServices />
      <AboutInvesting />
      <MakeMoney />
    </div>
  );
}

export default App;
