import React from 'react';

interface PasswordStrengthProps {
  characterLength: number;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({
  characterLength,
}) => {
  const tooWeak = characterLength < 6;
  const isWeak = characterLength >= 6 && characterLength < 10;
  const isMedium = characterLength >= 10 && characterLength < 15;
  const isStrong = characterLength >= 15 && characterLength <= 20;

  const className = 'w-[.625rem] h-full border transition duration-700';

  const coloredStyles = `${tooWeak ? 'border-app-red bg-app-red' : ''} ${
    isWeak ? 'border-app-orange bg-app-orange' : ''
  } ${isMedium ? 'border-app-yellow bg-app-yellow' : ''} ${
    isStrong ? 'border-app-green bg-app-green' : ''
  }`;

  let markup;

  switch (true) {
    case tooWeak:
      markup = (
        <>
          <span className={className + ' ' + coloredStyles}></span>
          <span className={className}></span>
          <span className={className}></span>
          <span className={className}></span>
        </>
      );
      break;
    case isWeak:
      markup = (
        <>
          <span className={className + coloredStyles}></span>
          <span className={className + coloredStyles}></span>
          <span className={className}></span>
          <span className={className}></span>
        </>
      );
      break;
    case isMedium:
      markup = (
        <>
          <span className={className + coloredStyles}></span>
          <span className={className + coloredStyles}></span>
          <span className={className + coloredStyles}></span>
          <span className={className}></span>
        </>
      );
      break;
    case isStrong:
      markup = (
        <>
          <span className={className + coloredStyles}></span>
          <span className={className + coloredStyles}></span>
          <span className={className + coloredStyles}></span>
          <span className={className + coloredStyles}></span>
        </>
      );

    default:
      markup = (
        <>
          <span className={className + coloredStyles}></span>
          <span className={className + coloredStyles}></span>
          <span className={className + coloredStyles}></span>
          <span className={className + coloredStyles}></span>
        </>
      );
  }

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-app-gray-900">
      <h2 className="text-app-gray-500">Strength</h2>

      <div className="flex gap-2">
        <span className="uppercase">
          {tooWeak && 'Too Weak!'}
          {isWeak && 'Weak'}
          {isMedium && 'Medium'}
          {isStrong && 'Strong'}
        </span>

        <div className="grid grid-cols-4 gap-1">{markup}</div>
      </div>
    </div>
  );
};

export default PasswordStrength;
