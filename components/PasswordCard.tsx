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
  const [wasCopied, setWasCopied] = useState(false);
  const [showCopyText, setShowCopyText] = useState(false);

  const generatePassword = useCallback(() => {
    // Setup all characters
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
    const symbols = [
      '!',
      '?',
      '#',
      '$',
      '(',
      ')',
      '&',
      '%',
      '/',
      '=',
      '+',
      '-',
      '*',
      ',',
      '<',
      '>',
    ];
    const uppercaseLetters = letters.map((letter) => letter.toUpperCase());

    let characters: string[] = [];

    // Fill characters Array based on current password settings selection and generate new password
    if (includeLowercaseLetters) characters.push(...letters);
    if (includeUppercaseLetters) characters.push(...uppercaseLetters);
    if (includeNumbers) characters.push(...numbers);
    if (includeSymbols) characters.push(...symbols);

    const shuffledCharacters = characters
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const shortendCharacters = shuffledCharacters.slice(0, characterLength);

    const generatedPassword = shortendCharacters.join('');

    // Check if generatedPassword really includes all selected password settings, if not, regenerate
    if (
      (includeLowercaseLetters &&
        !letters.some((letter) => generatedPassword.includes(letter))) ||
      (includeUppercaseLetters &&
        !uppercaseLetters.some((uppercaseLetter) =>
          generatedPassword.includes(uppercaseLetter)
        )) ||
      (includeNumbers &&
        !numbers.some((number) => generatedPassword.includes(number))) ||
      (includeSymbols &&
        !symbols.some((symbol) => generatedPassword.includes(symbol)))
    ) {
      generatePassword();
      return;
    }

    setWasCopied(true);
    setPassword(generatedPassword);

    setTimeout(() => {
      setWasCopied(false);
    }, 800);
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

  const copyPassword = () => {
    navigator.clipboard.writeText(password);

    setWasCopied(true);

    setTimeout(() => {
      setShowCopyText(true);
    }, 800);

    setTimeout(() => {
      setWasCopied(false);
      setShowCopyText(false);
    }, 2400);
  };

  return (
    <div className="grid gap-4">
      <header className="relative flex justify-between items-center heading bg-app-gray-800 p-4 h-[4.6875rem]">
        {!wasCopied && (
          <div className="text-[1.5rem] z-10 sm:text-[2rem] animate-fadeUp">
            {password}
          </div>
        )}

        <div
          className={`flex items-center justify-start absolute right-0 top-0 bottom-0 left-0 px-4 bg-transparent transition overflow-hidden after:content-[''] after:h-full after:absolute after:inset-0 after:z-0 after:transition after:bg-app-green after:duration-300 ${
            wasCopied ? 'after:animate-width after:visible' : 'after:invisible'
          }`}
        >
          {showCopyText && (
            <span className="text-app-green animate-fadeUp">Copied!</span>
          )}

          <button
            onClick={copyPassword}
            className="absolute top-0 right-4 bottom-0 z-10"
          >
            <IconCopy />
          </button>
        </div>
      </header>

      <div className="grid gap-4 py-6 px-8 bg-app-gray-800">
        <div className="flex items-center justify-between">
          <h2>Character Length</h2>
          <span className="text-app-green">{characterLength}</span>
        </div>

        <div className="relative">
          <input
            type="range"
            className="relative w-full mt-1 z-20 bg-transparent"
            min="0"
            max="20"
            step="1"
            onChange={(event) => {
              setCharacterLength(
                event.target.value as unknown as SetStateAction<number>
              );
            }}
          />

          <div
            className="w-full h-2 bg-app-green absolute left-0 top-1/2 z-10 -translate-y-1/2"
            style={{ width: `${(characterLength / 20) * 100}%` }}
          ></div>

          <div className="w-full h-2 bg-app-gray-900 absolute left-0 top-1/2 z-0 -translate-y-1/2"></div>
        </div>

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
          className="bg-app-green text-gray-800 uppercase p-4 flex items-center gap-2 justify-center border border-app-green enabled:hover:bg-transparent enabled:hover:text-app-green disabled:opacity-10 disabled:cursor-not-allowed"
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
