# Getting Started with Create React App

This project was with [Create React App](https://github.com/facebook/create-react-app) and tailwind.css version 3.3.2

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Create a simple String calculator with a method signature like this:

int add(string numbers)
Input: a string of comma-separated numbers
Output: an integer, sum of the numbers
Examples:

Input: “”, Output: 0
Input: “1”, Output: 1
Input: “1,5”, Output: 6
Allow the add method to handle any amount of numbers.

Allow the add method to handle new lines between numbers (instead of commas). ("1\n2,3" should return 6)

Support different delimiters:

To change the delimiter, the beginning of the string will contain a separate line that looks like this: "//[delimiter]\n[numbers…]". For example, "//;\n1;2" where the delimiter is ";" should return 3.
Calling add with a negative number will throw an exception: "negative numbers not allowed <negative_number>".

If there are multiple negative numbers, show all of them in the exception message, separated by commas.

if User will Input: “”, Output: 0
if User will Input: “1”, Output: 1
if User will Input: “1,5”, Output: 6
if User will Input: “1,5,7,8”, Output: 21
if User will Input: “1;5;7;8”, Output: 21
if User will Input: “1\n2,3". Output: 6
if User will Input: “//;\n1;2". Output: 3
if User will Input: “1,-3". Output: Negatives not allowed error popup
