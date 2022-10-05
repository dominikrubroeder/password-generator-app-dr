import React, { useState } from 'react';
import Checkbox from './Checkbox';
import IconArrowRight from './svg/IconArrowRight';
import IconCopy from './svg/IconCopy';

const PasswordCard: React.FC = () => {
  const [includeUppercaseLetters, setIncludeUppercaseLetters] = useState(false);
  const [includeLowercaseLetters, setIncludeLowercaseLetters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  return (
    <div className="grid gap-4 max-w-[33.75rem]">
      <header className="flex justify-between items-center heading bg-app-gray-800 p-4">
        <input
          className="bg-transparent focus:outline-none"
          value="PTx1f5DaFX"
          readOnly
        />

        <button>
          <IconCopy />
        </button>
      </header>

      <div className="grid gap-4 py-6 px-8 bg-app-gray-800">
        <div className="flex items-center justify-between">
          <h2>Character Length</h2>
          <span className="text-app-green">10</span>
        </div>

        <input type="range" className="w-full" />

        <ul className="grid gap-5">
          <li
            className="flex items-center gap-6 cursor-pointer"
            onClick={() =>
              setIncludeUppercaseLetters((previousState) => !previousState)
            }
          >
            <Checkbox checked={includeUppercaseLetters} />
            Include Uppercase Letters
          </li>
          <li
            className="flex items-center gap-6 cursor-pointer"
            onClick={() =>
              setIncludeLowercaseLetters((previousState) => !previousState)
            }
          >
            <Checkbox checked={includeLowercaseLetters} />
            Include Lowercase Letters
          </li>
          <li
            className="flex items-center gap-6 cursor-pointer"
            onClick={() => setIncludeNumbers((previousState) => !previousState)}
          >
            <Checkbox checked={includeNumbers} />
            Include Numbers
          </li>
          <li
            className="flex items-center gap-6 cursor-pointer"
            onClick={() => setIncludeSymbols((previousState) => !previousState)}
          >
            <Checkbox checked={includeSymbols} />
            Include Symbols
          </li>
        </ul>

        <div className="flex items-center justify-between px-6 py-4 bg-app-gray-900">
          <h2 className="text-app-gray-500">Strength</h2>

          <div className="grid grid-cols-2 gap-2">
            <span className="uppercase">Medium</span>
            <div className="grid grid-cols-4">
              <span className="w-[.625rem] h-full border border-app-yellow bg-app-yellow"></span>
              <span className="w-[.625rem] h-full border border-app-yellow bg-app-yellow"></span>
              <span className="w-[.625rem] h-full border border-app-yellow bg-app-yellow"></span>
              <span className="w-[.625rem] h-full border border-bg-white bg-transparent"></span>
            </div>
          </div>
        </div>

        <button className="bg-app-green text-gray-800 uppercase p-4 flex items-center gap-2 justify-center">
          Generate
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PasswordCard;
