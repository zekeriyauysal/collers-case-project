import React from "react";
function WhyJoinUs() {
  return (
    <div className="container mx-auto my-36 py-6 md:py-24 bg-white rounded-2xl sm:my-18 sm:py-12 lg:my-24 lg:py-24 shadow-lg">
      <div className="px-8 sm:px-16 md:px-32 flex flex-col sm:flex-row justify-between items-center">
        <div className="block order-2 sm:order-none ">
          <h2 className="text-slate-900 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight md:text-start text-center">Why join us</h2>
          <ul className="pl-0 py-8 list-none">
            <li className="check-svg-icon text-slate-900 text-xl leading-relaxed">Est et in pharetra magna adipiscing ornare aliquam.</li>
            <li className="check-svg-icon text-slate-900 text-xl leading-relaxed">Tellus arcu sed consequat ac velit ut eu blandit.</li>
            <li className="check-svg-icon text-slate-900 text-xl leading-relaxed">Ullamcorper ornare in et egestas dolor orci.</li>
          </ul>
          <a href="#!" className="text-xl font-medium leading-6 tracking-wide py-3 px-4 text-amber-900 hover:text-amber-700 transition-colors border-2 border-amber-900 hover:border-amber-700 rounded-lg">
            Sign up now
          </a>
        </div>
        <div className="custom-why-join-us-container w-[55%] order-2 sm:order-none  max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-2xl mb-8 sm:mb-0">
          <img onClick={() => alert("Modal açışl")} src="./index/svg/why-join-us/play-icon.svg" alt="play video" className="w-10max-w-full relative h-auto mx-auto top-[40px] md:top-0 left-[40%] md:left-[25%] object-cover cursor-pointer z-10"></img>
        </div>
      </div>
    </div>

    // <div className="container mx-auto my-36 py-24 bg-white rounded-[30px]">
    //   <div className="px-32 flex justify-between items-center">
    //     <div className="block h-full">
    //       <h2 className="text-slate-900 text-[56px] font-extrabold leading-[61.6px]">Why join us</h2>
    //       <ul className="pl-0 py-8">
    //         <li className="check-svg-icon text-slate-900 text-xl font-normal leading-9">Est et in pharetra magna adipiscing ornare aliquam.</li>
    //         <li className="check-svg-icon text-slate-900 text-xl font-normal leading-9">Tellus arcu sed consequat ac velit ut eu blandit.</li>
    //         <li className="check-svg-icon text-slate-900 text-xl font-normal leading-9">Ullamcorper ornare in et egestas dolor orci..</li>
    //       </ul>
    //       <a href="!#" className="text-xl font-medium leading-6 tracking-[0.05px] py-3 px-4 text-amber-900 hover:text-amber-700 transition-colors border-2 border-amber-900 hover:border-amber-700 rounded-lg">
    //         Sign up now
    //       </a>
    //     </div>
    //     <div className="custom-why-join-us-container relative right-16 ">
    //       <img onClick={() => alert("Modal açışl")} src="./index/svg/why-join-us/play-icon.svg" alt="play video" class="max-w-full relative h-auto object-cover left-[-90px] cursor-pointer z-10"></img>
    //     </div>
    //   </div>
    // </div>
  );
}

export default WhyJoinUs;
