
import React from 'react';

interface Props {
  className?: string;
  inverted?: boolean;
}

const BrandLogo: React.FC<Props> = ({ className = "", inverted = false }) => {
  // Dynamic colors based on the inverted prop for visibility on light/dark backgrounds
  const stateFill = inverted ? "#D6B586" : "#000000";
  const stateStroke = inverted ? "#ffffff" : "#D6B586";
  const textFill = inverted ? "#ffffff" : "#D6B586";

  return (
    <svg
      viewBox="0 0 350 280"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Oregon Septic Logo"
    >
      {/* OREGON STATE SHAPE */}
      <path
        d="M60 25 
           L55 30 
           L45 50 
           L35 120 
           L20 180 
           L25 200 
           L35 220 
           L40 235 
           H280 
           V180 
           L300 150 
           L295 140 
           L310 120 
           L315 95 
           L310 85 
           L325 55 
           L280 35 
           L240 50 
           L210 55 
           L180 45 
           L170 50 
           L140 40 
           H130 
           L100 50 
           L80 40 
           L60 25 
           Z"
        fill={stateFill}
        stroke={stateStroke}
        strokeWidth="12"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* TEXT GROUP - Centered and Fitted */}
      <g>
          {/* OREGON: Top Line */}
          <text 
            x="175" 
            y="130" 
            textAnchor="middle" 
            dominantBaseline="middle"
            fontFamily="'Black Ops One', 'Impact', sans-serif" 
            fontSize="68" 
            fontWeight="900"
            fill={textFill} 
            letterSpacing="2"
          >
            OREGON
          </text>
          
          {/* SEPTIC: Bottom Line */}
          <text 
            x="175" 
            y="200" 
            textAnchor="middle" 
            dominantBaseline="middle"
            fontFamily="'Black Ops One', 'Impact', sans-serif" 
            fontSize="68" 
            fontWeight="900"
            fill={textFill} 
            letterSpacing="2"
          >
            SEPTIC
          </text>
      </g>
    </svg>
  );
};

export default BrandLogo;
