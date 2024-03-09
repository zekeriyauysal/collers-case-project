import React, { useRef } from "react";
import BestTheyLoveUsCardComponent from "./best-they-love-us-card/best-they-love-us-card-component";

function BestTheyLoveUsCardList() {
  const swiperRef = useRef();
  const cardList = [
    { companyLogo: "./index/logos/logo-1.png", description: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.", avatar: "./index/avatars/avatar-1.png", fullName: "Helen Jummy", title: "Team Lead" },
    { companyLogo: "./index/logos/logo-2.png", description: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.", avatar: "./index/avatars/avatar-2.png", fullName: "Helen Jummy", title: "Co-founder" },
    { companyLogo: "./index/logos/logo-3.png", description: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.", avatar: "./index/avatars/avatar-3.png", fullName: "Helen Jummy", title: "Manager" },
    { companyLogo: "./index/logos/logo-1.png", description: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.", avatar: "./index/avatars/avatar-4.png", fullName: "Helen Jummy", title: "Team Lead" },
    { companyLogo: "./index/logos/logo-1.png", description: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.", avatar: "./index/avatars/avatar-1.png", fullName: "Helen Jummy", title: "Team Lead" },
    { companyLogo: "./index/logos/logo-2.png", description: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.", avatar: "./index/avatars/avatar-2.png", fullName: "Helen Jummy", title: "Co-founder" },
    { companyLogo: "./index/logos/logo-3.png", description: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.", avatar: "./index/avatars/avatar-3.png", fullName: "Helen Jummy", title: "Manager" },
    { companyLogo: "./index/logos/logo-1.png", description: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.", avatar: "./index/avatars/avatar-4.png", fullName: "Helen Jummy", title: "Team Lead" },
  ];

  return (
    <div className="h-full md:py-32 py-16 w-full">
      <div className="md:mx-auto md:container flex md:justify-between md:items-center">
        <h2 className="md:text-[56px] md:font-extrabold md:leading-[61.6px] text-[32px] leading-[35.2px] font-bold mx-auto md:mx-0">Because they love us</h2>
        <div className="md:pt-2 md:block hidden">
          <button onClick={() => swiperRef.current?.slidePrev()} className="bg-transparent border-none p-0">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_dd_1_1221)">
                <rect x="4" y="3" width="46" height="46" rx="23" stroke="#78350F" strokeWidth="2" />
                <path d="M33.5 26H21H33.5ZM21 26L27 20L21 26ZM21 26L27 32L21 26Z" fill="#78350F" />
                <path d="M21 26L27 32M33.5 26H21H33.5ZM21 26L27 20L21 26Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <filter id="filter0_dd_1_1221" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1221" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_1_1221" result="effect2_dropShadow_1_1221" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_1221" result="shape" />
                </filter>
              </defs>
            </svg>
          </button>
          <button onClick={() => swiperRef.current?.slideNext()} className="bg-transparent border-none ml-6 p-0">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_dd_1_1222)">
                <rect x="4" y="3" width="46" height="46" rx="23" stroke="#78350F" strokeWidth="2" />
                <path d="M21 26H33.5H21ZM33.5 26L27.5 20L33.5 26ZM33.5 26L27.5 32L33.5 26Z" fill="#78350F" />
                <path d="M33.5 26L27.5 32M21 26H33.5H21ZM33.5 26L27.5 20L33.5 26Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <filter id="filter0_dd_1_1222" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1222" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_1_1222" result="effect2_dropShadow_1_1222" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_1222" result="shape" />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative flex w-full">
        <div className="rounded-lg m-4 w-full relative custom-swiper-container after:w-full mx-0 md:pt-16 md:mx-auto md:after:container overflow-hidden">
          <BestTheyLoveUsCardComponent cardList={cardList} swiperRef={swiperRef} />
        </div>
      </div>
    </div>
  );
}

export default BestTheyLoveUsCardList;
