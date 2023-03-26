import React from "react";
import AboutServices from "./about-services/about-services";
import Header from "./header/header";
import AboutInvesting from "./about-investing/about-investing";
import MakeMoney from "./make-money/make-money";
import BusinessGrowth from "./business-growth/business-growth";
function App() {
  return (
    <div className="App">
      <Header />
      <AboutServices />
      <AboutInvesting />
      <MakeMoney />
      <BusinessGrowth />
    </div>
  );
}

export default App;
