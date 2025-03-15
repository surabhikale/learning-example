import React, { useState } from "react";
import "./stringcalculator.css"; // if required we can add custom css
const StringCalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const calculateSum = () => {
    //check empty or triming
    if (!input.trim()) {
      setResult(0);
      return;
    }
    let numbers = input; //passing values to numbers for assignments
    let delimiter = /,|;|\\n/; // Default delimiters: comma and newline

    const customDelimiterMatch = input.match(/^\/\/(.+)\\n/);
    if (customDelimiterMatch) {
      const customDelimiter = customDelimiterMatch[1]; // Capture custom delimiter
      // If multiple custom delimiters are present in the format //[*][%], parse them
      delimiter = new RegExp(
        customDelimiter.replace(/\[(.*?)\]/g, (match, p1) => `\\${p1}`) + "|\\n"
      );
      numbers = input.split("\\n").slice(1).join("\\n");
    }
    // interger number convert logic after split
    const numArray = numbers
      .split(delimiter)
      .map((n) => parseInt(n, 10))
      .filter((n) => !isNaN(n));

    // Handle negative numbers
    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length) {
      //joinning multiple negative number if user added
      alert(`Negatives not allowed: ${negatives.join(", ")}`);
      return;
    }

    // Sum numbers (ignore >1000 give 0 or that number)
    const sum = numArray
      .filter((n) => n <= 1000)
      .reduce((acc, num) => acc + num, 0);
    setResult(sum); //last set the numbers in results
  };

  return (
    <div class="bg-gray-100">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold text-">String Calculator</h2>
          <p className="text-xl font-bold text-blue-400">
            Input: a string of comma-separated numbers
          </p>
          <p className="text-xl font-bold text-blue-400">
            Output: an integer, sum of the numbers
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <input
              className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              type="text"
              placeholder="Enter numbers"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              onClick={calculateSum}
            >
              Calculate
            </button>
          </div>
          <h3 className="text-xl font-bold text-green-900">Result: {result}</h3>
          <p className="text-base font-semibold text-gray-900">
            Input: “”, Output: 0
          </p>
          <p className="text-base font-semibold text-gray-900">
            Input: “1”, Output: 1
          </p>
          <p className="text-base font-semibold text-gray-900">
            Input: “1,5”, Output: 6
          </p>
          <p className="text-base font-semibold text-gray-900">
            Input: “1,5,7,8”, Output: 21
          </p>
          <p className="text-base font-semibold text-gray-900">
            Input: “1;5;7;8”, Output: 21
          </p>
          <p className="text-base font-semibold text-gray-900">
            Input: “1\n2,3". Output: 6{" "}
          </p>
          <p className="text-base font-semibold text-gray-900">
            Input: “//;\n1;2". Output: 3{" "}
          </p>
          <p className="text-xl font-bold text-red-500">
            Input: “1,-3". Output: Negatives not allowed error popup{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StringCalculator;
