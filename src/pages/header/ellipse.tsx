import React from "react";

export default function Ellipse() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="530"
      height="280"
      fill="none"
      viewBox="0 0 530 280"
    >
      <g filter="url(#filter0_d)">
        <path
          fill="url(#paint0_linear)"
          d="M520 270A249.999 249.999 0 0093.223 93.223 250.004 250.004 0 0020 270h500z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="530"
          height="280"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="5"
            result="effect1_dropShadow"
          ></feMorphology>
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
          x1="96"
          x2="611.5"
          y1="97"
          y2="529.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E94560"></stop>
          <stop offset="1" stopColor="#FF6B00"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
