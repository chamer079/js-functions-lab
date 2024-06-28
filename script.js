/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (num1, num2) => {
    // num1 = number
    // num2 - number
    console.log(num1, num2)

    // goal - compare the two numbers & return the larger of the two numbers

    // edge-case - a consideration that changes how we write our code

    if(num1 >= num2){
        return num1
    } else {
        return num2
    }
}

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9))

/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

const isAdult = (age) => {
    if(age >= 18){
        return "Adult"
    } else {
        return "Minor"
    }
}

console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/



console.log('Exercise 3 Result:', isCharAVowel("a"));
