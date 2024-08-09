
Initial Setup 
    -Clone repo
    -Install NPM - Use npm install at the command line. Make sure you are in the correct directory
    -Install Vitest - use npm install -D vitest at the command line
    -Add "test":"vitest" to dependancies

Decide on Kata
    -Had a look through Code wars to see if i could find anything interesting.
    -Found an intersting codewar that would be used to determine if you needed to take an umbrella based on weather conditions
    -Have remodelled this codewar and decided on a function based on feeding a cat with 2 parameters which will determine if the cat needs to be fed or not

Implementation
    -Start by having an idea of how the function will be written. I know there will be 2 parameters, a string and a number. The string will decide the state of the cat and the number will determine how many times the cat has been fed already. The combination of the state and number of times the cat has eaten will determine if the cat needs to be fed or not
    -Import test and expect from the vitest module in the main.test.js file
    -Create an empty function in the main.js file and export 
    -Import the function in main.js to main.test.js
    -Write a simple test in main.test.js
    -Run the test by using npm run test at the command line to make sure vitest is installed correctly. Expect to see a failed test as function is currently empty
    -Write code in the main.js function to pass the test.
    -Write more tests based on the possible parameters and outcomes from the function.
    -Refactor the code after each test and code update iteration.
    -Continue until the code is complete.

Feedback
    -I've realised that as the first parameter is a string, anything can be typed here. I'ved decided to add a bonus task to limit the string to three words only and to output an error message if the string is not one of these three words.


