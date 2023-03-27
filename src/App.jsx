import React from "react";
import AboutServices from "./about-services/about-services";
import Header from "./header/header";
import AboutInvesting from "./about-investing/about-investing";
import MakeMoney from "./make-money/make-money";
import BusinessGrowth from "./business-growth/business-growth";
import TeamTogether from "./team-together/team-together";
import QuestionAnswer from "./question-answer/question-answer";
import Subscribe from "./subscribe/subscribe";
function App() {
  return (
    <div className="App">
      <Header />
      <AboutServices />
      <AboutInvesting />
      <MakeMoney />
      <BusinessGrowth />
      <TeamTogether />
      <QuestionAnswer />
      <Subscribe />
    </div>
  );
}

export default App;
