import React from "react";

const CicalorProgessBar = ({
  percent = 0,
  size = 3,
  strokeWidth = 0.25,
  strokeColor = "green",
}) => {
  const validPercent = isNaN(Number(percent)) ? 0 : Number(percent);

  const radius = size / 2 - strokeWidth;

  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke="#ccc"
          strokeWidth={`${strokeWidth}vw`}
          fill="none"
        />

        <circle
          fill="none"
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          stroke={strokeColor}
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${2 * Math.PI * radius}vw`}
          strokeDashoffset={` ${2 * Math.PI * radius - (2 * Math.PI * radius * percent) / 100}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="1.2rem"
          fill="white"
        >
          {validPercent}
        </text>
      </svg>
    </div>
  );
};

export default CicalorProgessBar;
