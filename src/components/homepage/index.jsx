import React from "react";
import Collectible from "./collectible";
import BestCardList from "./best-card-list";
import WhyJoinUs from "./why-join-us";
import BestTheyLoveUsCardList from "./becouse-they-love-us-card-list";
import GrowYourCollection from "./grow-your-collection";
import ShoesCollected from "./shoes-collected";

function Homepage() {
  return (
    <>
      <Collectible />
      <BestCardList />
      <WhyJoinUs />
       <BestTheyLoveUsCardList /> 
      <GrowYourCollection />
      <ShoesCollected />  
    </>
  );
}

export default Homepage;
