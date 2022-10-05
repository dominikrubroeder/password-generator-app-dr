import React, { useState, SetStateAction, useEffect, useCallback } from 'react';
import Checkbox from './Checkbox';
import PasswordStrength from './PasswordStrength';
import IconArrowRight from './svg/IconArrowRight';
import IconCopy from './svg/IconCopy';

const PasswordCard: React.FC = () => {
  const [password, setPassword] = useState('');
  const [characterLength, setCharacterLength] = useState(10);
  const [includeUppercaseLetters, setIncludeUppercaseLetters] = useState(true);
  const [includeLowercaseLetters, setIncludeLowercaseLetters] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = useCallback(() => {
    const letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = ['!', '?', '#', '$', '(', ')'];
    const uppercaseLetters = letters.map((letter) => letter.toUpperCase());

    let characters: string[] = [];

    if (includeLowercaseLetters) characters.push(...letters);
    if (includeUppercaseLetters) characters.push(...uppercaseLetters);
    if (includeNumbers) characters.push(...numbers);
    if (includeSymbols) characters.push(...symbols);

    const shuffledCharacters = characters
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const generatedPassword = shuffledCharacters
      .slice(0, characterLength)
      .join('');

    setPassword(generatedPassword);
  }, [
    characterLength,
    includeLowercaseLetters,
    includeNumbers,
    includeSymbols,
    includeUppercaseLetters,
  ]);

  useEffect(() => {
    if (characterLength < 6) return;
    generatePassword();
  }, [characterLength, generatePassword]);

  return (
    <div className="grid gap-4 max-w-[33.75rem]">
      <header className="flex justify-between items-center heading bg-app-gray-800 p-4">
        <input
          className="bg-transparent focus:outline-none"
          value={password}
          placeholder="P4$5W0rD!"
          readOnly
        />

        <button>
          <IconCopy />
        </button>
      </header>

      <div className="grid gap-4 py-6 px-8 bg-app-gray-800">
        <div className="flex items-center justify-between">
          <h2>Character Length</h2>
          <span className="text-app-green">{characterLength}</span>
        </div>

        <input
          type="range"
          className="w-full"
          min="0"
          max="20"
          step="1"
          onChange={(event) => {
            setCharacterLength(
              event.target.value as unknown as SetStateAction<number>
            );
          }}
        />

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

        <PasswordStrength characterLength={characterLength} />

        <button
          className="bg-app-green text-gray-800 uppercase p-4 flex items-center gap-2 justify-center border border-app-green transition duration-700 enabled:hover:bg-transparent enabled:hover:text-app-green disabled:opacity-10 disabled:cursor-not-allowed"
          disabled={characterLength < 6}
          onClick={generatePassword}
        >
          Generate
          <IconArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PasswordCard;
