import React from "react";

function Bottom() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1534"
      height="284"
      fill="none"
      viewBox="0 0 1534 284"
    >
      <path fill="#1A1A2E" d="M15 265h1014l-79-6-935-72v78z"></path>
      <g filter="url(#filter0_di)">
        <path
          fill="#0F3460"
          d="M15 128s126.239 26.392 209.5 41.5c124 22.5 198.919 34.273 325.5 47 184 18.5 479 32 479 32l47-13.5v30h-47s-321.395-1.786-559.5-23.5C311.854 227.124 15 187 15 187v-59z"
        ></path>
      </g>
      <g filter="url(#filter1_d)">
        <path
          fill="url(#paint0_linear)"
          d="M1529 265h-500c0-138.071 111.93-250 250-250s250 111.929 250 250z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_di"
          width="1091"
          height="167"
          x="0"
          y="117"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="7.5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow"></feBlend>
        </filter>
        <filter
          id="filter1_d"
          width="520"
          height="270"
          x="1014"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-5" dy="-5"></feOffset>
          <feGaussianBlur stdDeviation="5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="1105"
          x2="1620.5"
          y1="92"
          y2="524.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E94560"></stop>
          <stop offset="1" stopColor="#FF6B00"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Bottom;