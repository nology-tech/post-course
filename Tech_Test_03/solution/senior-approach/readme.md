## Any comments on the code as is?
* Long functions
* Unclear variable names
* Functions aren't pure - they have side affects which make it difficult to test
* Difficult to read
* Functions have more than one responsibility

## How would you test it?
* Step 1 - Get the code compiling (probably by mocking the imported files we don't have and installing babel to transpile the ES6 syntax into ES5)
* Step 2 - Cover in tests to give confidence to refactor and understand what the code is doing
* Step 3 - Refactor without modifying tests

## Could you use aspects of functional programming to improve the code?
* Make the functions pure
* Use higher-order functions such as filter and reduce

## Please refactor the code to make it simpler to test and reason about. Please share your refactored code as a secret gist. (https://gist.github.com/)

* See attached refactoring.