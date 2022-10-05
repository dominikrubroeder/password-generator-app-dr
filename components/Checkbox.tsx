import React from 'react';
import IconCheck from './svg/IconCheck';

interface CheckboxProps {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked }) => {
  return (
    <div
      className={`w-5 h-5 border flex items-center justify-center transition duration-300 ${
        checked
          ? 'border-app-green bg-app-green'
          : 'border-white bg-transparent'
      }`}
    >
      {checked && <IconCheck />}
    </div>
  );
};

export default Checkbox;
