import React from "react";

function Collectible() {
  return (
    <div className="homepage-collectible-container container-fluid h-full pb-36">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-8 md:py-32">
        <div className="w-full md:max-w-[714px] px-4">
          <h2 className="text-[56px] leading-[61.6px] text-center md:text-start md:text-7xl text-slate-900 font-extrabold md:leading-[79.2px] pb-4 md:pb-8">Collectible Sneakers</h2>
          <span className="flex text-lg text-slate-900 font-normal leading-7 text-center md:text-start">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</span>
          <div className="flex items-center pt-8 justify-center md:justify-start">
            <a href="!#" className="text-center text-xl font-medium tracking-[0.05px] py-2 px-4 text-amber-900 hover:text-amber-700 transition-colors border-2 border-amber-900 hover:border-amber-700 rounded-lg">
              Sign up now
            </a>
            <a href="!#" className="flex items-center py-3 px-4 ml-4 font-medium text-base text-amber-900 hover:text-amber-700 transition-colors tracking-[0.05px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM16.126 13.746L12.071 16.644C11.166 17.29 9.941 17.033 9.334 16.068C9.11494 15.7171 8.99918 15.3116 9 14.898V9.102C9 7.942 9.883 7 10.972 7C11.363 7 11.746 7.124 12.071 7.356L16.126 10.254C17.031 10.901 17.272 12.206 16.666 13.171C16.5251 13.3959 16.3417 13.5913 16.126 13.746ZM10.972 9.102V14.898L15.027 12L10.972 9.102Z"
                  fill="#78350F"
                />
              </svg>
              <span className="ml-2">
              Watch Demo</span>
            </a>
          </div>
        </div>
        <img className="w-full h-[314px] md:h-full md:w-auto object-contain mt-8 md:mt-0" alt="shoe-img" src="./shoe.png"></img>
      </div>
      <div className="container mx-auto flex flex-wrap gap-8 pt-24 px-4 md:px-0 md:flex-nowrap md:gap-24 items-center justify-center text-center md:text-start md:justify-start overflow-hidden">
        <div className="flex flex-wrap relative w-full md:w-auto">
          <div className="absolute top-0 left-6 z-0 flex justify-center w-full md:w-auto md:justify-start">
            <svg width="57" height="39" viewBox="0 0 57 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M3.07107 17.4973C-3.22858 11.1977 1.23308 0.42627 10.1421 0.42627H46.7107C55.6197 0.42627 60.0814 11.1977 53.7817 17.4973L35.4975 35.7816C31.5922 39.6868 25.2606 39.6868 21.3553 35.7816L3.07107 17.4973Z" fill="#0369A1" />
            </svg>
          </div>
          <div className="relative z-10 w-full flex justify-center md:w-auto md:justify-start">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9875 10.6665H46.1685C46.1685 10.6665 43.8202 46.0188 32.0781 46.0188C26.342 46.0188 22.8476 37.5825 20.7736 28.9521C18.6019 19.9157 17.9875 10.6665 17.9875 10.6665Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M46.1685 10.6664C46.1685 10.6664 48.6251 8.04598 50.6667 7.99974C54.6667 7.90918 55.4061 10.6664 55.4061 10.6664C56.1891 12.2918 56.8152 16.5179 53.0579 20.4188C49.3003 24.3198 45.0941 27.7331 43.3824 28.952" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.9874 10.6669C17.9874 10.6669 15.4279 8.01662 13.3332 8.00027C9.33321 7.96904 8.59371 10.6669 8.59371 10.6669C7.81089 12.2923 7.18465 16.5183 10.9421 20.4193C14.6996 24.3203 19.062 27.7336 20.7734 28.9528" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22.6843 53.3334C22.6843 48.4572 32.0779 46.019 32.0779 46.019C32.0779 46.019 41.4717 48.4572 41.4717 53.3334H22.6843Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h3 className="mt-1 mb-4 text-xl font-medium text-slate-900 leading-5">Nibh viverra</h3>
            <span className="text-lg font-normal text-slate-900 leading-7">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </span>
          </div>
        </div>
        <div className="relative w-full md:w-auto">
          <div className="absolute top-0 left-6 z-0 flex justify-center w-full md:w-auto md:justify-start">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M21.9283 3.07106C28.228 -3.22859 38.9994 1.23309 38.9994 10.1421L38.9994 29C38.9994 34.5229 34.5222 39 28.9994 39L10.1415 39C1.23244 39 -3.22922 28.2286 3.07043 21.9289L21.9283 3.07106Z" fill="#15803D" />
            </svg>
          </div>
          <div className="relative z-10 w-full flex justify-center md:w-auto md:justify-start">
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M53.6667 53.3332L11 39.9998M53.6667 53.3332H11V39.9998L53.6667 53.3332ZM53.6667 53.3332V31.9998C53.6667 20.2178 44.1155 10.6665 32.3333 10.6665C30.2152 10.6665 28.1693 10.9752 26.2381 11.5499C17.4259 14.1726 11 22.3358 11 31.9998V39.9998L53.6667 53.3332Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M43 24V26.6667" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M32.3333 21.3335V24.0002" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M21.6667 18.6665V21.3332" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h3 className="mt-1 mb-4 text-lg md:text-xl font-medium text-slate-900 leading-5">Cursus amet</h3>
            <span className="text-base md:text-lg font-normal text-slate-900 leading-7">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </span>
          </div>
        </div>
        <div className="relative w-full md:w-auto">
          <div className="absolute top-1 left-11 z-0 flex justify-center w-full md:w-auto md:justify-start">
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.5" x="0.000671387" width="45" height="45" rx="20" fill="#A21CAF" />
            </svg>
          </div>
          <div className="relative z-10 w-full flex justify-center md:w-auto md:justify-start">
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00002 53.3332V23.9998C6.00002 21.0543 8.38783 18.6665 11.3334 18.6665H54C56.9456 18.6665 59.3334 21.0543 59.3334 23.9998V53.3332C59.3334 56.2788 56.9456 58.6665 54 58.6665H11.3334C8.38783 58.6665 6.00002 56.2788 6.00002 53.3332Z" stroke="#78350F" strokeWidth="1.5" />
              <path d="M23.3334 6.6665L32.6667 15.9998L42 6.6665" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h3 className="mt-1 mb-4 text-lg md:text-xl font-medium text-slate-900 leading-5">Ipsum fermentum</h3>
            <span className="text-base md:text-lg font-normal text-slate-900 leading-7">Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collectible;
