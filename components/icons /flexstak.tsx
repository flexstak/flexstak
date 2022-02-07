import * as React from 'react';
import { IProps } from './index';

const Flexstak: React.FC<IProps> = ({
  fill,
  filled,
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 32}
      height={size || height || 32}
      viewBox="0 0 1080 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="1080"
        height="1080"
        rx="160"
        fill="url(#paint0_linear_1737_78)"
      />
      <g filter="url(#filter0_d_1737_78)">
        <rect
          x="303"
          y="539.791"
          width="469.223"
          height="121.96"
          rx="4"
          transform="rotate(-45 303 539.791)"
          fill="white"
        />
      </g>
      <g filter="url(#filter1_d_1737_78)">
        <rect
          x="417.985"
          y="654.775"
          width="309.488"
          height="121.96"
          rx="4"
          transform="rotate(-45 417.985 654.775)"
          fill="white"
        />
      </g>
      <g filter="url(#filter2_d_1737_78)">
        <rect
          x="532.971"
          y="769.762"
          width="149.752"
          height="121.96"
          rx="4"
          transform="rotate(-45 532.971 769.762)"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1737_78"
          x="287"
          y="197"
          width="450.03"
          height="450.029"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.192157 0 0 0 0 0 0 0 0 0 0.494118 0 0 0 0.56 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1737_78"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1737_78"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1737_78"
          x="401.985"
          y="424.936"
          width="337.08"
          height="337.078"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.192157 0 0 0 0 0 0 0 0 0 0.494118 0 0 0 0.56 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1737_78"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1737_78"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_1737_78"
          x="516.971"
          y="652.871"
          width="224.129"
          height="224.129"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.192157 0 0 0 0 0 0 0 0 0 0.494118 0 0 0 0.56 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1737_78"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1737_78"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1737_78"
          x1="-278.438"
          y1="-253.125"
          x2="1096.87"
          y2="1080"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B494E8" />
          <stop offset="1" stopColor="#5E08E6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Flexstak;
