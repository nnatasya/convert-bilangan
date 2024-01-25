import React, { useState } from 'react';
import './App.css';

const KonversiBilangan = () => {
  const [decimal, setDecimal] = useState('');
  const [octal, setOctal] = useState('');
  const [binary, setBinary] = useState('');
  const [hexadecimal, setHexadecimal] = useState('');

  const handleDecimalChange = (e) => {
    const value = e.target.value;
    setDecimal(value);
    setOctal(parseInt(value, 10).toString(8));
    setBinary(parseInt(value, 10).toString(2));
    setHexadecimal(parseInt(value, 10).toString(16).toUpperCase());
  };

  const handleOctalChange = (e) => {
    const value = e.target.value;
    setOctal(value);
    setDecimal(parseInt(value, 8).toString(10));
    setBinary(parseInt(value, 8).toString(2));
    setHexadecimal(parseInt(value, 8).toString(16).toUpperCase());
  };

  const handleBinaryChange = (e) => {
    const value = e.target.value;
    setBinary(value);
    setDecimal(parseInt(value, 2).toString(10));
    setOctal(parseInt(value, 2).toString(8));
    setHexadecimal(parseInt(value, 2).toString(16).toUpperCase());
  };

  const handleHexadecimalChange = (e) => {
    const value = e.target.value;
    setHexadecimal(value.toUpperCase());
    setDecimal(parseInt(value, 16).toString(10));
    setOctal(parseInt(value, 16).toString(8));
    setBinary(parseInt(value, 16).toString(2));
  };

  return (
    <div>
      <h2>Konversi Bilangan</h2>
      <label>
        Decimal:
        <input type="text" value={decimal} onChange={handleDecimalChange} />
      </label>
      <br />
      <label>
        Octal:
        <input type="text" value={octal} onChange={handleOctalChange} />
      </label>
      <br />
      <label>
        Binary:
        <input type="text" value={binary} onChange={handleBinaryChange} />
      </label>
      <br />
      <label>
        Hexadecimal:
        <input type="text" value={hexadecimal} onChange={handleHexadecimalChange} />
      </label>
    </div>
  );
};

export default KonversiBilangan;
