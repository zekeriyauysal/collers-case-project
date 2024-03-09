import React from "react";
import BestCardComponent from "./best-card/best-card-component";

function BestCardList() {
  const cardData = [
    {
      title: "Title",
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: "./index/card-1.png",
      customCardClass: "best-card-background-1",
    },
    {
      title: "Title",
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: "./index/card-2.png",
      customCardClass: "best-card-background-2",
    },
    {
      title: "Title",
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      image: "./index/card-3.png",
      customCardClass: "best-card-background-3",
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="container mx-auto py-10 md:py-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-tight md:leading-[61.6px] mb-4 md:mb-0">The best of the best</h2>
          <a href="#" className="md:w-auto px-12 py-4 text-center text-2xl leading-6 font-bold tracking-[0.05px] text-white transition-colors border-2 border-slate-50 hover:bg-slate-700 rounded-lg">
            Sign up now
          </a>
        </div>
        <div className="pt-3 md:pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((data, index) => {
            return <BestCardComponent key={index} title={data?.title} description={data?.description} image={data?.image} customCardClass={data?.customCardClass} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default BestCardList;
