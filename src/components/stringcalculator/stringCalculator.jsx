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
    let delimiter = /,|;|\\n/; // Default delimiters: comma and newline for react jsx need to passed //n

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
    <div className="isolate bg-white h-screen px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          {" "}
          String Calculator
        </h2>
        <p class="mt-2 text-xl text-slate-800">
          Input: a string of comma-separated numbers
        </p>
        <p class="mt-2 text-xl text-slate-800">
          {" "}
          Output: an integer, sum of the numbers
        </p>
      </div>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        <input
          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
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
      <h3 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
        Result: {result}
      </h3>
      <ul class="mt-8 space-y-3">
        <li class="flex">
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            class="h-8 w-8 flex-none fill-blue-500"
          >
            <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
          </svg>
          <span class="ml-4">if User will Input: “”, Output: 0</span>
        </li>
        <li class="flex">
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            class="h-8 w-8 flex-none fill-blue-500"
          >
            <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
          </svg>
          <span class="ml-4"> if User will Input: “1”, Output: 1</span>
        </li>
        <li class="flex">
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            class="h-8 w-8 flex-none fill-blue-500"
          >
            <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
          </svg>
          <span class="ml-4">if User will Input: “1,5”, Output: 6</span>
        </li>
        <li class="flex">
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            class="h-8 w-8 flex-none fill-blue-500"
          >
            <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
          </svg>
          <span class="ml-4">if User will Input: “1,5,7,8”, Output: 21</span>
        </li>
        <li class="flex">
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            class="h-8 w-8 flex-none fill-blue-500"
          >
            <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
          </svg>
          <span class="ml-4">if User will Input: “1;5;7;8”, Output: 21</span>
        </li>
        <li class="flex">
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            class="h-8 w-8 flex-none fill-blue-500"
          >
            <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
          </svg>
          <span class="ml-4"> if User will Input: “1\n2,3". Output: 6</span>
        </li>
        <li class="flex">
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            class="h-8 w-8 flex-none fill-blue-500"
          >
            <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
          </svg>
          <span class="ml-4">if User will Input: “//;\n1;2". Output: 3</span>
        </li>
        <li class="flex">
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            class="h-8 w-8 flex-none fill-blue-500"
          >
            <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
          </svg>
          <span class="ml-4">
            {" "}
            if User will Input: “1,-3". Output: Negatives not allowed error
            popup{" "}
          </span>
        </li>
      </ul>
      <p className="mt-8  text-center text-xs">
        <span className="font-semibold">About this task:</span> built with React
        Tailwind CSS, jest testing tool{" "}
        <a
          href="https://github.com/surabhikale/learning-example.git"
          class="group hover:text-gray-700 border-l border-gray-500 ml-3 pl-3 text-gray-550 text-xs font-hairline"
        >
          See the GitHub Repo
          <span
            class="
                  inline-block
                  text-gray-550
                  print:text-black
                  font-normal
                  group-hover:text-gray-700
                  transition
                  duration-100
                  ease-in
                "
          >
            ↗
          </span>
        </a>
      </p>
    </div>
  );
};

export default StringCalculator;
