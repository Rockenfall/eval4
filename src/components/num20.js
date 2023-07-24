import { useState } from 'react';

function Factorial() {
  const [number, setNumber] = useState(1);
  const [result, setResult] = useState(1);

  const calculateFactorial = () => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    setResult(factorial);
  };

  const handleSelectChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateFactorial();
  };

  const options = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Número:</label>
        <select id="number" value={number} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button type="submit">Calcular factorial</button>
      </form>
      {result && <p>El factorial de {number} es {result}</p>}
    </div>
  );
}

export default Factorial;
