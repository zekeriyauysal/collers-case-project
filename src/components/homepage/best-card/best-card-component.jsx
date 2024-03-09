import React from "react";

function BestCardComponent({ title, description, image, customCardClass }) {
  return (
    <div className={customCardClass}>
      <div className="max-w-sm mx-auto rounded-[10px] overflow-hidden shadow-[0px_12px_20px_rgba(255,_255,_255,_0.4)] relative bg-slate-900">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <h3 className="text-white text-2xl font-bold leading-[26.4px] my-4">{title}</h3>
          <p className="text-white text-lg font-normal leading-[28.8px]">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-8">
          <button className="w-full bg-slate-900 hover:bg-slate-700 text-white font-bold border-2 py-4 px-4 rounded flex items-center justify-center">
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.33331 16C6.80287 16 6.29417 15.7893 5.91909 15.4142C5.54402 15.0391 5.33331 14.5304 5.33331 14C5.33331 13.4696 5.54402 12.9609 5.91909 12.5858C6.29417 12.2107 6.80287 12 7.33331 12C7.86374 12 8.37245 12.2107 8.74752 12.5858C9.12259 12.9609 9.33331 13.4696 9.33331 14C9.33331 14.5304 9.12259 15.0391 8.74752 15.4142C8.37245 15.7893 7.86374 16 7.33331 16ZM14.3333 16C13.8029 16 13.2942 15.7893 12.9191 15.4142C12.544 15.0391 12.3333 14.5304 12.3333 14C12.3333 13.4696 12.544 12.9609 12.9191 12.5858C13.2942 12.2107 13.8029 12 14.3333 12C14.8637 12 15.3724 12.2107 15.7475 12.5858C16.1226 12.9609 16.3333 13.4696 16.3333 14C16.3333 14.5304 16.1226 15.0391 15.7475 15.4142C15.3724 15.7893 14.8637 16 14.3333 16ZM1.29531 1.923C1.04567 1.91495 0.808948 1.81012 0.635205 1.63068C0.461462 1.45125 0.364319 1.21127 0.364319 0.9615C0.364319 0.711732 0.461462 0.471755 0.635205 0.292318C0.808948 0.11288 1.04567 0.00805181 1.29531 0L2.44631 0C3.34831 0 4.12831 0.626 4.32431 1.506L5.57731 7.148C5.77331 8.028 6.55331 8.654 7.45531 8.654H14.9673L16.4093 2.884H7.06431C6.81702 2.87272 6.5836 2.76654 6.41259 2.58755C6.24159 2.40857 6.14616 2.17055 6.14616 1.923C6.14616 1.67545 6.24159 1.43743 6.41259 1.25845C6.5836 1.07946 6.81702 0.973284 7.06431 0.962H16.4093C16.7016 0.961914 16.9901 1.02848 17.2529 1.15663C17.5156 1.28479 17.7457 1.47116 17.9256 1.70158C18.1055 1.93201 18.2305 2.20041 18.2911 2.4864C18.3517 2.77238 18.3463 3.06842 18.2753 3.352L16.8333 9.12C16.7294 9.5362 16.4892 9.90568 16.1511 10.1697C15.813 10.4337 15.3963 10.5771 14.9673 10.577H7.45531C6.5801 10.5771 5.73103 10.2787 5.04832 9.7311C4.36561 9.18348 3.89009 8.41938 3.70031 7.565L2.44631 1.923H1.29531Z"
                fill="white"
              />
            </svg>
            <span className="ml-2 text-xl leading-6 tracking-[0.05px]">Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default BestCardComponent;
