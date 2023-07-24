import { useState } from 'react';

function Factorial() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(1);

  const calculateFactorial = () => {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    setResult(factorial);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateFactorial();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Número:</label>
        <input type="number" id="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
        <button type="submit">Calcular factorial</button>
      </form>
      {result && <p>El factorial de {number} es {result}</p>}
    </div>
  );
}

export default Factorial;