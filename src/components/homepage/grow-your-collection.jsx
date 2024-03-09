import React, { useState } from "react";

function GrowYourCollection() {
  const SearchIcon = () => (
    <svg className="text-slate-900 text-base" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5 16.5C11.2879 16.5 12.0682 16.3448 12.7961 16.0433C13.5241 15.7418 14.1855 15.2998 14.7427 14.7427C15.2998 14.1855 15.7418 13.5241 16.0433 12.7961C16.3448 12.0682 16.5 11.2879 16.5 10.5C16.5 9.71208 16.3448 8.93187 16.0433 8.20391C15.7418 7.47596 15.2998 6.81453 14.7427 6.25737C14.1855 5.70022 13.5241 5.25827 12.7961 4.95674C12.0682 4.65521 11.2879 4.50002 10.5 4.50002C8.90872 4.50002 7.38259 5.13216 6.25737 6.25737C5.13216 7.38259 4.50002 8.90872 4.50002 10.5C4.50002 12.0913 5.13216 13.6174 6.25737 14.7427C7.38259 15.8679 8.90872 16.5 10.5 16.5ZM16.82 15.406L20.4 18.986C20.4955 19.0783 20.5716 19.1887 20.6239 19.3108C20.6762 19.4328 20.7037 19.564 20.7048 19.6968C20.7058 19.8296 20.6804 19.9613 20.63 20.0841C20.5797 20.207 20.5053 20.3186 20.4114 20.4124C20.3174 20.5062 20.2057 20.5804 20.0828 20.6306C19.9599 20.6808 19.8282 20.706 19.6954 20.7048C19.5626 20.7035 19.4314 20.6758 19.3095 20.6233C19.1875 20.5708 19.0772 20.4946 18.985 20.399L15.405 16.819C13.7975 18.0669 11.7748 18.6552 9.74877 18.4642C7.72273 18.2732 5.84562 17.3173 4.49957 15.7911C3.15351 14.2648 2.4397 12.283 2.50344 10.2489C2.56718 8.21492 3.40368 6.28164 4.84266 4.84266C6.28164 3.40368 8.21492 2.56718 10.2489 2.50344C12.283 2.4397 14.2648 3.15351 15.7911 4.49957C17.3173 5.84562 18.2732 7.72273 18.4642 9.74877C18.6552 11.7748 18.0669 13.7975 16.819 15.405L16.82 15.406Z"
        fill="#0F172A"
      />
    </svg>
  );

  const RightArrowIcon = () => (
    <svg className="text-slate-900 text-base" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z"
        fill="#0F172A"
      />
    </svg>
  );

  const ShieldCheckIcon = () => (
    <svg className="text-slate-900 text-base" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 6.386V10C6.00014 11.2854 6.27502 12.556 6.80622 13.7265C7.33741 14.897 8.11266 15.9405 9.08 16.787L12 19.342L14.92 16.787C15.8874 15.9405 16.6627 14.8971 17.1939 13.7265C17.7251 12.556 17.9999 11.2854 18 10V6.386L12 4.136L6 6.386ZM4.649 4.756L12 2L19.351 4.757C19.5416 4.82844 19.7058 4.95632 19.8218 5.12357C19.9377 5.29082 19.9999 5.48948 20 5.693V10C20 13.177 18.628 16.2 16.237 18.293L12 22L7.763 18.293C6.58096 17.2587 5.63369 15.9837 4.98469 14.5534C4.33569 13.1231 3.99996 11.5706 4 10V5.693C4.00008 5.48948 4.06225 5.29082 4.17822 5.12357C4.29419 4.95632 4.45843 4.82844 4.649 4.757V4.756ZM10.939 12.268L14.475 8.732C14.6636 8.54984 14.9162 8.44905 15.1784 8.45133C15.4406 8.4536 15.6914 8.55877 15.8768 8.74418C16.0622 8.92959 16.1674 9.1804 16.1697 9.4426C16.172 9.7048 16.0712 9.9574 15.889 10.146L11.646 14.39C11.4585 14.5775 11.2042 14.6828 10.939 14.6828C10.6738 14.6828 10.4195 14.5775 10.232 14.39L8.111 12.269C7.92884 12.0804 7.82805 11.8278 7.83033 11.5656C7.8326 11.3034 7.93777 11.0526 8.12318 10.8672C8.30859 10.6818 8.5594 10.5766 8.8216 10.5743C9.0838 10.572 9.3364 10.6728 9.525 10.855L10.939 12.269V12.268Z"
        fill="#0F172A"
      />
    </svg>
  );

  const RocketIcon = () => (
    <svg className="text-slate-900 text-base" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.308 13.471L10.384 12.407L11.311 11.878C12.2011 11.3622 13.0188 10.7307 13.743 9.99998C16.383 7.35898 17.189 4.25398 16.218 3.28198C15.246 2.31198 12.141 3.11598 9.49999 5.75698C8.73999 6.51698 8.10299 7.34698 7.62199 8.18898L7.09199 9.11598L6.02899 9.19198C5.15665 9.25316 4.32886 9.60044 3.67399 10.18C4.92394 10.73 6.06037 11.5083 7.02499 12.475C8.00499 13.455 8.77699 14.592 9.31999 15.826C9.89952 15.1711 10.2468 14.3433 10.308 13.471ZM7.33499 16.3C7.13388 16.5734 6.91224 16.8312 6.67199 17.071C5.49999 18.243 3.73199 18.596 1.36799 18.131C0.90399 15.768 1.25799 14 2.42799 12.828C2.67599 12.582 2.93399 12.36 3.19999 12.165C2.3802 11.7645 1.50413 11.4914 0.60199 11.355C0.892427 10.4433 1.3976 9.61473 2.07499 8.93898C3.09339 7.91804 4.44655 7.2997 5.88499 7.19798C6.48877 6.15316 7.22857 5.19311 8.08499 4.34298C11.405 1.02298 15.679 -0.0840244 17.632 1.86798C19.584 3.82098 18.476 8.09497 15.157 11.414C14.3069 12.2704 13.3468 13.0102 12.302 13.614C12.2003 15.0524 11.5819 16.4056 10.561 17.424C9.88581 18.1023 9.05707 18.6079 8.14499 18.898C8.00861 17.9958 7.73547 17.1198 7.33499 16.3ZM5.60999 13.89C5.44896 13.7286 5.26741 13.589 5.06999 13.475C4.63799 13.625 4.12999 13.955 3.66499 14.419C3.44599 14.639 3.17799 15.378 3.17499 16.324C4.12099 16.321 4.86299 16.05 5.07999 15.834C5.54499 15.368 5.87499 14.861 6.02399 14.429C5.91024 14.2316 5.77105 14.0501 5.60999 13.889V13.89ZM13.388 6.10998C13.2903 6.01825 13.2121 5.90783 13.1579 5.78527C13.1037 5.66271 13.0747 5.53052 13.0727 5.39654C13.0706 5.26256 13.0954 5.12953 13.1458 5.00535C13.1961 4.88117 13.2709 4.76837 13.3657 4.67365C13.4605 4.57894 13.5733 4.50424 13.6975 4.45399C13.8217 4.40374 13.9548 4.37897 14.0888 4.38114C14.2228 4.38332 14.3549 4.4124 14.4774 4.46665C14.6 4.52091 14.7103 4.59923 14.802 4.69698C14.9744 4.88714 15.0671 5.13633 15.0609 5.39295C15.0547 5.64957 14.95 5.89397 14.7685 6.07555C14.5871 6.25712 14.3428 6.36197 14.0861 6.36838C13.8295 6.37479 13.5803 6.28227 13.39 6.10998H13.388Z"
        fill="#0F172A"
      />
    </svg>
  );

  const ScreenIcon = () => (
    <svg className="text-slate-900 text-base" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 2C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2H3ZM3 0H17C17.7956 0 18.5587 0.31607 19.1213 0.87868C19.6839 1.44129 20 2.20435 20 3V12C20 12.7956 19.6839 13.5587 19.1213 14.1213C18.5587 14.6839 17.7956 15 17 15H3C2.20435 15 1.44129 14.6839 0.87868 14.1213C0.31607 13.5587 0 12.7956 0 12L0 3C0 2.20435 0.31607 1.44129 0.87868 0.87868C1.44129 0.31607 2.20435 0 3 0V0ZM7 16H13C13.2652 16 13.5196 16.1054 13.7071 16.2929C13.8946 16.4804 14 16.7348 14 17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H7C6.73478 18 6.48043 17.8946 6.29289 17.7071C6.10536 17.5196 6 17.2652 6 17C6 16.7348 6.10536 16.4804 6.29289 16.2929C6.48043 16.1054 6.73478 16 7 16Z"
        fill="#0F172A"
      />
    </svg>
  );

  const RadioWaveIcon = () => (
    <svg className="text-slate-900 text-base" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 21.8C5.436 20.873 2 16.838 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 16.838 18.564 20.873 14 21.8V19.748C15.8853 19.2612 17.5284 18.1035 18.6212 16.492C19.714 14.8804 20.1816 12.9256 19.9362 10.994C19.6909 9.06237 18.7495 7.28653 17.2885 5.99936C15.8275 4.71218 13.9471 4.00203 12 4.00203C10.0529 4.00203 8.17255 4.71218 6.71153 5.99936C5.25052 7.28653 4.30911 9.06237 4.06376 10.994C3.81841 12.9256 4.28597 14.8804 5.3788 16.492C6.47162 18.1035 8.11468 19.2612 10 19.748V21.8ZM10 17.659C8.66557 17.1872 7.54089 16.2589 6.82474 15.038C6.10858 13.8172 5.84707 12.3825 6.08641 10.9875C6.32575 9.59254 7.05054 8.32707 8.13268 7.41479C9.21482 6.50251 10.5846 6.00215 12 6.00215C13.4154 6.00215 14.7852 6.50251 15.8673 7.41479C16.9495 8.32707 17.6742 9.59254 17.9136 10.9875C18.1529 12.3825 17.8914 13.8172 17.1753 15.038C16.4591 16.2589 15.3344 17.1872 14 17.659V15.465C14.7626 15.0247 15.3586 14.3451 15.6955 13.5316C16.0325 12.7181 16.0916 11.8162 15.8637 10.9656C15.6358 10.1151 15.1336 9.36352 14.435 8.82749C13.7365 8.29145 12.8805 8.0009 12 8.0009C11.1195 8.0009 10.2635 8.29145 9.56495 8.82749C8.86638 9.36352 8.3642 10.1151 8.1363 10.9656C7.9084 11.8162 7.96751 12.7181 8.30448 13.5316C8.64145 14.3451 9.23743 15.0247 10 15.465V17.659ZM13 13.732V22H11V13.732C10.6187 13.5119 10.3207 13.1721 10.1522 12.7653C9.98376 12.3586 9.9542 11.9076 10.0681 11.4823C10.1821 11.057 10.4332 10.6813 10.7825 10.4132C11.1318 10.1452 11.5597 9.99995 12 9.99995C12.4403 9.99995 12.8682 10.1452 13.2175 10.4132C13.5668 10.6813 13.8179 11.057 13.9319 11.4823C14.0458 11.9076 14.0162 12.3586 13.8478 12.7653C13.6793 13.1721 13.3813 13.5119 13 13.732Z"
        fill="#0F172A"
      />
    </svg>
  );

  const SettingsLineIcon = () => (
    <svg className="text-slate-900 text-base" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 16V5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5V16H14C14.2652 16 14.5196 16.1054 14.7071 16.2929C14.8946 16.4804 15 16.7348 15 17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H13V19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19V18H10C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17C9 16.7348 9.10536 16.4804 9.29289 16.2929C9.48043 16.1054 9.73478 16 10 16H11ZM18 6V5C18 4.73478 18.1054 4.48043 18.2929 4.29289C18.4804 4.10536 18.7348 4 19 4C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8H20V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20C18.7348 20 18.4804 19.8946 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V8H17C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6H18ZM6 9H7C7.26522 9 7.51957 9.10536 7.70711 9.29289C7.89464 9.48043 8 9.73478 8 10C8 10.2652 7.89464 10.5196 7.70711 10.7071C7.51957 10.8946 7.26522 11 7 11H6V19C6 19.2652 5.89464 19.5196 5.70711 19.7071C5.51957 19.8946 5.26522 20 5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H4V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5V9Z"
        fill="#0F172A"
      />
    </svg>
  );
  const tabsData = [
    { id: 1, icon: <SearchIcon />, name: "Bibendum tellus", content: "./index/collection-1.png" },
    { id: 2, icon: <ShieldCheckIcon />, name: "Cras eget", content: "./index/collection-2.png" },
    { id: 3, icon: <RocketIcon />, name: "Dolor pharetra", content: "./index/collection-1.png" },
    { id: 4, icon: <ScreenIcon />, name: "Amet, fringilla", content: "./index/collection-2.png" },
    { id: 5, icon: <RadioWaveIcon />, name: "Amet nibh", content: "./index/collection-1.png" },
    { id: 6, icon: <SettingsLineIcon />, name: "Sed velit", content: "./index/collection-2.png" },
  ];

  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <div className="w-full h-full">
      <div className="container mx-auto md:pb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-snug lg:leading-[61.6px]">The best of the best</h2>
        <p className="text-slate-900 text-base sm:text-lg font-normal leading-relaxed pt-8">Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
      </div>
      <div className="grow-your-collection-container h-full min-h-[980px] sm:min-h-0">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between px-4 sm:px-6 lg:px-8">
          {/* Horizontally scrollable tabs button group for mobile */}
          <div className="flex flex-row sm:flex-col pt-12 overflow-x-auto no-scrollbar space-x-4 sm:space-x-0 sm:space-y-4">
            {tabsData.map((tab) => (
              <button key={tab.id} className={`p-4 flex items-center text-left md:mb-0 mb-4 ${activeTab === tab.id ? "bg-white shadow-md rounded-lg" : "hover:shadow-md"} whitespace-nowrap`} onClick={() => setActiveTab(tab.id)}>
                <span className="mr-4">{tab.icon}</span>
                <span className="mr-3 text-xl text-slate-900 leading-6 font-medium tracking-[0.05px]">{tab.name}</span>
                {activeTab === tab.id && (
                  <span className="flex justify-end">
                    <RightArrowIcon />
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="md:pt-14 pt-4 sm:pt-0 sm:pl-4 lg:pl-8">
            <img src={tabsData.find((tab) => tab.id === activeTab)?.content} alt={tabsData.find((tab) => tab.id === activeTab)?.name}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowYourCollection;