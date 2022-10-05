import React from 'react';

export interface SvgProps {
  fill?: string;
}

const IconArrowRight: React.FC<SvgProps> = ({ fill }) => {
  return (
    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={`${fill ? 'fill-app-green' : 'fill-app-gray-900'}`}
        d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
      />
    </svg>
  );
};

export default IconArrowRight;
