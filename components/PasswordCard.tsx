import React from 'react';

const PasswordCard: React.FC = () => {
  return (
    <div className="grid gap-4 max-w-[33.75rem]">
      <header className="heading bg-app-gray-800 p-4">
        <input
          className="bg-transparent focus:outline-none"
          value="PTx1f5DaFX"
          readOnly
        />
      </header>

      <div className="grid gap-4 py-6 px-8 bg-app-gray-800">
        <div className="flex items-center justify-between">
          <h2>Character Length</h2>
          <span className="text-app-green">10</span>
        </div>

        <input type="range" className="w-full" />

        <ul className="grid gap-5">
          <li className="flex items-center gap-6">
            <input type="checkbox" />
            Include Uppercase Letters
          </li>
          <li className="flex items-center gap-6">
            <input type="checkbox" />
            Include Lowercase Letters
          </li>
          <li className="flex items-center gap-6">
            <input type="checkbox" />
            Include Numbers
          </li>
          <li className="flex items-center gap-6">
            <input type="checkbox" />
            Include Symbols
          </li>
        </ul>

        <div className="flex items-center justify-between px-6 py-4 bg-app-gray-900">
          <h2>Strength</h2>
          <div>...</div>
        </div>

        <button className="bg-app-green text-gray-800 uppercase p-4">
          Generate
        </button>
      </div>
    </div>
  );
};

export default PasswordCard;
