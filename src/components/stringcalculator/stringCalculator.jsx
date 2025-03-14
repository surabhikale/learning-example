import React, { useState } from "react";

const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const calculateSum = () => {
    if (!input.trim()) {
      setResult(0);
      return;
    }

    let numbers = input;

    
    let delimiterRegex = /,|\\n|\s|;/;

    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\\n"); 
      const delimiterSection = numbers.substring(2, delimiterEnd);
      console.log(delimiterSection);

      // Handle multiple delimiters like "//[*][%]\n"
      const delimiters = delimiterSection.match(/\[(.*?)\]/g);
      if (delimiters) {
        console.log(delimiters);
        const escapedDelimiters = delimiters.map((d) =>
          d.slice(1, -1).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        );
        delimiterRegex = new RegExp(escapedDelimiters.join("|"));
      } else {
        delimiterRegex = new RegExp(delimiterSection.replace(/[.;*+?^${}()|[\]\\]/g, "\\$&"));
        console.log('33 >>',delimiterRegex);
      }

      numbers = numbers.substring(delimiterEnd + 1); 
      console.log('numbers 37',numbers);
    }

   
    const numArray = numbers
      .split(delimiterRegex)
      .map((n) => parseInt(n, 10))
      .filter((n) => !isNaN(n));

    // Handle negative numbers
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length) {
      alert(`Negatives not allowed: ${negatives.join(", ")}`);
      return;
    }

    // Sum numbers (ignore >1000)
    const sum = numArray.filter((n) => n <= 1000).reduce((acc, num) => acc + num, 0);
    console.log(sum);
    setResult(sum);
  };

  return (
    <div>
      <h2>String Calculator</h2>
      <input
        type="text"
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={calculateSum}>Calculate</button>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default StringCalculator;
