import React, { useState } from "react";

function ShoesCollected() {
  const [activeMarker, setActiveMarker] = useState(1);
  const shoesCount = 11658467;
  const markersData = [
    { id: 1, text: "Emma Simpson bir çift", brandName: "Cool Shoes", position: { top: 40, left: 32 } },
    { id: 2, text: "Emma Simpson bir çift", brandName: "Cool Shoes 2", position: { top: 49, left: 35 } },
    { id: 3, text: "Emma Simpson bir çift", brandName: "Cool Shoes 3", position: { top: 70, left: 42.2 } },
    { id: 4, text: "Emma Simpson bir çift", brandName: "Cool Shoes 4", position: { top: 76, left: 41 } },
    { id: 5, text: "Emma Simpson bir çift", brandName: "Cool Shoes 5", position: { top: 28, left: 41 } },
    { id: 6, text: "Emma Simpson bir çift", brandName: "Cool Shoes 6", position: { top: 15, left: 44 } },
    { id: 7, text: "Emma Simpson bir çift", brandName: "Cool Shoes 7", position: { top: 67, left: 53 } },
    { id: 8, text: "Emma Simpson bir çift", brandName: "Cool Shoes 8", position: { top: 53, left: 62.5 } },
    { id: 9, text: "Emma Simpson bir çift", brandName: "Cool Shoes 9", position: { top: 51, left: 67.5 } },
    { id: 10, text: "Emma Simpson bir çift", brandName: "Cool Shoes 10", position: { top: 75, left: 69 } },
  ];

  const MarkerItem = ({ marker }) => (
    <div className="absolute" style={{ top: `${marker.position.top}%`, left: `${marker.position.left}%` }}>
      <button className={marker.id === activeMarker ? "w-5 h-5 border-2 border-lime-400 bg-lime-200 rounded-full" : "w-5 h-5 border-2 border-lime-400 hover:bg-lime-200 rounded-full"} aria-label="Marker" />
      {activeMarker === marker.id && (
        <div className="absolute w-[306px] top-[-280px] left-[-140px]">
          <img className="relative h-full object-contain mx-auto z-20" src="/index/shoe.png" alt="Cool Shoes" />
          <div className="relative flex justify-center top-[-44px] z-10">
            <p className=" w-[250px] bg-slate-200 p-3 mt-0 text-slate-900 text-left text-sm font-normal leading-[19.4px] rounded-[5px]">
              {marker.text} <span>{marker.brandName}</span>.
            </p>
          </div>
        </div>
      )}
    </div>
  );
    return (
    <div className="container mx-auto max-w-full max-h-[700px] bg-amber-900 overflow-hidden">
      <div className="relative min-w-[1920px] h-[700px] bg-no-repeat bg-center xl:bg-auto md:bg-cover md:right-0 right-[100%]" style={{ backgroundImage: "url('/index/world-map.png')" }}>
        <div className="w-full h-full flex justify-center items-center flex-col">
          <p className="text-amber-50 md:text-[96px] md:leading-[105.6px] font-extrabold text-5xl leading-[52.8px] relative md:right-0 right-[16%] md:top-0 top-4">{shoesCount.toLocaleString()}</p>
          <p className="text-amber-50 md:text-[56px] md:leading-[61.6px] md:font-extrabold text-[32px] leading-[35.2px] font-bold md:pt-4 pt-2 relative md:right-0 right-[16%] md:top-0 top-4">Shoes Collected</p>
          {markersData.map((marker) => (
            <MarkerItem key={marker.id} marker={marker} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoesCollected;
