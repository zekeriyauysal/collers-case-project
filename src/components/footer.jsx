import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center sm:text-left">
            <p className="text-base font-medium leading-[17.6px] text-white">Product</p>
            <ul className="mt-8 space-y-4 text-base pb-8 md:pb-0">
              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Overview
                </a>
              </li>
              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Browse
                </a>
              </li>
              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Accessibility
                </a>
              </li>
              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Five
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-base font-medium leading-[17.6px] text-white">Solutions</p>

            <ul className="mt-8 space-y-4 text-base pb-8 md:pb-0">
              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Brainstorming
                </a>
              </li>

              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Ideation
                </a>
              </li>

              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Wireframing
                </a>
              </li>

              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Research
                </a>
              </li>

              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Design
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-base font-medium leading-[17.6px] text-white">Support</p>

            <ul className="mt-8 space-y-4 text-base pb-8 md:pb-0">
              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Contact Us
                </a>
              </li>

              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Developers
                </a>
              </li>

              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Documentation
                </a>
              </li>

              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Integrations
                </a>
              </li>

              <li>
                <a className="text-base font-normal leading-[22.4px] text-slate-200 transition hover:text-gray-700/75" href="!#">
                  Reports
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-center mx-auto">
            <p className="text-base font-medium leading-[17.6px] text-white">Get the App</p>
            <ul className="mt-8 space-y-4 text-base pb-8 md:pb-0 pl-6 md:pl-12">
              <li>
                <a href="!#">
                  <img className="md:pl-0 pl-2 " src="./app-store.png" alt="app-store-logo"></img>
                </a>
              </li>
              <li>
                <a href="!#">
                  <img src="./google-play.png" alt="google-play-logo"></img>
                </a>
              </li>
            </ul>
            <div className="pt-12">
              <p className="text-base font-medium leading-[17.6px] text-white">Follow Us</p>
              <ul className="flex items-center pt-5 gap-6">
                <li>
                <a href="!#">
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.812 0.0169912H4.145C1.855 0.0169912 0 1.85199 0 4.11599V9.88399C0 12.148 1.856 13.984 4.145 13.984H15.812C18.102 13.984 19.957 12.148 19.957 9.88399V4.11599C19.957 1.85199 18.101 0.0159912 15.812 0.0159912V0.0169912ZM13.009 7.27999L7.552 9.85499C7.51872 9.87102 7.48192 9.87836 7.44503 9.87634C7.40815 9.87433 7.37237 9.86301 7.34103 9.84345C7.3097 9.82389 7.28382 9.79672 7.2658 9.76447C7.24779 9.73222 7.23822 9.69593 7.238 9.65899V4.34999C7.23867 4.31286 7.24872 4.27651 7.26722 4.24432C7.28573 4.21212 7.31208 4.18513 7.34382 4.16587C7.37556 4.1466 7.41167 4.13568 7.44877 4.13413C7.48587 4.13258 7.52276 4.14044 7.556 4.15699L13.014 6.89199C13.0504 6.91012 13.0809 6.93814 13.102 6.97282C13.1232 7.0075 13.1341 7.04744 13.1336 7.08806C13.1331 7.12868 13.1211 7.16833 13.0991 7.20245C13.077 7.23658 13.0458 7.2638 13.009 7.28099V7.27999Z"
                      fill="#E2E8F0"
                    />
                  </svg>
                  </a>
                </li>
                <li>
                <a href="!#">
                  <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.046 3.865V6.613H0.0319977V9.973H2.046V19.959H6.18V9.974H8.955C8.955 9.974 9.215 8.363 9.341 6.601H6.197V4.303C6.197 3.96 6.647 3.498 7.093 3.498H9.347V0H6.283C1.943 0 2.046 3.363 2.046 3.865Z" fill="#E2E8F0" />
                  </svg>
                  </a>
                </li>
                <li>
                <a href="!#">
                  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 1.90701C19.2504 2.23439 18.4565 2.44905 17.644 2.54401C18.4968 2.04324 19.138 1.24912 19.448 0.310011C18.64 0.780339 17.7587 1.11161 16.841 1.29001C16.4545 0.885217 15.9897 0.563399 15.4748 0.34419C14.9598 0.124981 14.4056 0.0129768 13.846 0.0150114C11.58 0.0150114 9.743 1.82501 9.743 4.05501C9.743 4.37101 9.779 4.68001 9.849 4.97501C8.22358 4.89771 6.63212 4.48242 5.17617 3.75565C3.72022 3.02888 2.43176 2.00659 1.393 0.754011C1.02883 1.36841 0.837415 2.06979 0.839 2.78401C0.839697 3.45198 1.00683 4.10924 1.32529 4.6964C1.64375 5.28357 2.1035 5.78212 2.663 6.14701C2.01248 6.12601 1.37602 5.95234 0.805 5.64001V5.69001C0.805 7.64801 2.22 9.28101 4.095 9.65301C3.74261 9.74651 3.37958 9.79391 3.015 9.79401C2.75 9.79401 2.493 9.76901 2.242 9.71901C2.51008 10.5269 3.02311 11.2313 3.70982 11.7344C4.39653 12.2374 5.22284 12.5141 6.074 12.526C4.61407 13.6506 2.82182 14.2581 0.979 14.253C0.647 14.253 0.321 14.233 0 14.197C1.88125 15.3877 4.06259 16.0183 6.289 16.015C13.836 16.015 17.962 9.85801 17.962 4.51901L17.948 3.99601C18.7529 3.42968 19.4481 2.72186 20 1.90701Z"
                      fill="#E2E8F0"
                    />
                  </svg>
                  </a>
                </li>
                <li>
                <a href="!#">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z"
                      fill="#E2E8F0"
                    />
                    <path
                      d="M11.982 6.819C10.6134 6.82112 9.30154 7.36579 8.33391 8.33361C7.36627 9.30143 6.82186 10.6134 6.82001 11.982C6.82159 13.3509 7.36603 14.6633 8.33391 15.6314C9.30179 16.5995 10.6141 17.1441 11.983 17.146C13.3521 17.1444 14.6647 16.5998 15.6328 15.6317C16.6008 14.6637 17.1454 13.3511 17.147 11.982C17.1449 10.6131 16.5999 9.30088 15.6317 8.33319C14.6634 7.3655 13.3509 6.82132 11.982 6.82V6.819ZM11.982 15.138C11.1452 15.138 10.3428 14.8056 9.75109 14.2139C9.15941 13.6222 8.82701 12.8198 8.82701 11.983C8.82701 11.1462 9.15941 10.3438 9.75109 9.75208C10.3428 9.1604 11.1452 8.828 11.982 8.828C12.8188 8.828 13.6213 9.1604 14.2129 9.75208C14.8046 10.3438 15.137 11.1462 15.137 11.983C15.137 12.8198 14.8046 13.6222 14.2129 14.2139C13.6213 14.8056 12.8188 15.138 11.982 15.138Z"
                      fill="#E2E8F0"
                    />
                    <path d="M17.156 8.095C17.8392 8.095 18.393 7.54118 18.393 6.858C18.393 6.17483 17.8392 5.621 17.156 5.621C16.4728 5.621 15.919 6.17483 15.919 6.858C15.919 7.54118 16.4728 8.095 17.156 8.095Z" fill="#E2E8F0" />
                  </svg>
                  </a> 
                </li>
                <li>
                 <a href="!#"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19.959 11.719V19.098H15.681V12.213C15.681 10.483 15.062 9.303 13.514 9.303C12.332 9.303 11.628 10.099 11.319 10.868C11.206 11.143 11.177 11.526 11.177 11.911V19.098H6.897C6.897 19.098 6.955 7.438 6.897 6.229H11.177V8.053L11.149 8.095H11.177V8.053C11.745 7.178 12.76 5.927 15.033 5.927C17.848 5.927 19.959 7.767 19.959 11.719ZM2.421 0.026001C0.958 0.026001 0 0.986001 0 2.249C0 3.484 0.93 4.473 2.365 4.473H2.393C3.886 4.473 4.813 3.484 4.813 2.249C4.787 0.986001 3.887 0.026001 2.422 0.026001H2.421ZM0.254 19.098H4.532V6.229H0.254V19.098Z"
                      fill="#E2E8F0"
                    />
                  </svg>
                  </a> 
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-slate-700 mt-12"></div>
        <div className="md:flex md:justify-between py-8 md:text-start text-center ">
          <p className="text-slate-200 text-base font-normal leading-[22.4px]">Collers @ 2023. All rights reserved.</p>
          <ul className="flex gap-8 md:pt-0 pt-6 md:justify-start justify-center">
            <li className="text-slate-200 text-base font-normal leading-[22.4px] transition hover:text-gray-700/75"><a href="!#">Terms</a></li>
            <li className="text-slate-200 text-base font-normal leading-[22.4px] transition hover:text-gray-700/75"><a href="!#">Privacy</a></li>
            <li className="text-slate-200 text-base font-normal leading-[22.4px] transition hover:text-gray-700/75"><a href="!#">Contact</a></li>
            <li className="text-slate-200 text-base font-normal leading-[22.4px]">
            <a className="flex" href="!#">
              <svg  className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.252 8C2.08416 8.6534 1.99949 9.32538 2 10C2 10.69 2.088 11.36 2.252 12H5.1C4.96518 10.6701 4.96518 9.32993 5.1 8H2.252ZM3.07 6H5.416C5.682 4.783 6.066 3.693 6.537 2.786C5.08518 3.48542 3.87722 4.60523 3.07 6ZM17.748 8H14.9C15.0348 9.32993 15.0348 10.6701 14.9 12H17.748C18.0847 10.6879 18.0847 9.31208 17.748 8ZM16.93 6C16.1228 4.60523 14.9148 3.48542 13.463 2.786C13.935 3.693 14.318 4.783 14.584 6H16.93ZM7.112 8C7.03708 8.66403 6.99968 9.33176 7 10C7 10.685 7.038 11.355 7.112 12H12.888C13.0386 10.6709 13.0386 9.32908 12.888 8H7.112ZM7.47 6H12.53C12.348 5.2483 12.0855 4.51841 11.747 3.823C11.119 2.568 10.447 2 10 2C9.552 2 8.881 2.568 8.253 3.823C7.938 4.455 7.673 5.19 7.47 6ZM3.07 14C3.87722 15.3948 5.08518 16.5146 6.537 17.214C6.065 16.307 5.682 15.217 5.416 14H3.07ZM16.93 14H14.584C14.318 15.217 13.934 16.307 13.463 17.214C14.9148 16.5146 16.1228 15.3948 16.93 14ZM7.47 14C7.673 14.81 7.938 15.545 8.253 16.177C8.881 17.432 9.553 18 10 18C10.448 18 11.119 17.432 11.747 16.177C12.062 15.545 12.327 14.81 12.53 14H7.47ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20Z"
                  fill="#E2E8F0"
                />
              </svg>
              EN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
