/*
The are N coins, each showing either heads or tails. We would
like all the coins to show the same face. What is the minimum
number of coins that must be reversed?

Write a function

    function solution(A);

that, given a zero-indexed array A consisting of N integers
representing the coins, returns the minimum number of coins
that must be reversed. Consecutive elements of array A 
represent consecutive coins and contain only a 0 (heads) or a 1
(tails).

For Example, given Array A = [1, 0, 0, 1, 0, 0], there are four coins
showing heads and two coins showing tails. The function
should return 2, as after reversing two coins (in positions 0 and 3),
all the coins will be showing the same face (heads).

Assume that:

    - N is a integer within the range [1..100];
    - each element of array A is an integer that can
      have one of the following values: 0, 1.


In your solution, focus on correctness. The performance of your
solution will not be the focus of the  assessment.
*/

//SOLUTION with recursion

const reverse = str => { str==="" ? str : reverse(str.substr(1)) + str[0] }

/*
 ANTOHER SOLUTIONS
1. for loop

The most straightforward and one might say naive approach is to utilise for loop. In this approach we can use decrementing or incrementing loop to iterate through each letter of the string and create a new reversed string:

function reverse(str){
  let reversed = "";    
  for (var i = str.length - 1; i >= 0; i--){        
    reversed += str[i];
  }    
  return reversed;
}

ES6, however introduced a new for loop syntax, such as for … of. It eliminates possibilities of making lots of silly typos while declaring our for loop, and results in a much neater piece of code:

function reverse(str){
  let reversed = "";
  for(let char of str){
    reversed = char + reversed;
  }
  return reversed;
}

2. reverse() method for arrays

In case when your interviewer didn’t specifically ask you to avoid using a built-in reverse() method you can should definitely take advantage of it. In JavaScript reverse() method exists only for arrays, so first we need to use split() to transform string into an array, then apply reverse() method and finally join() it all back together:

function reverse(str){
  return str.split("").reverse().join("");
}

3. spread syntax (ES6) + reverse() method for arrays

ES6 introduces one more way for splitting our string into an array, and that is a spread operator […]. Even though this solution is similar to the previous one, I believe it’s worth mentioning, for it looks and works pretty great.

function reverse(str){
  return [...str].reverse().join('');
}

4. reduce() method for arrays

One of the most unconventional approaches that I rarely see in reverse string discussions is using reduce() method. Once again it only works for arrays, so first we need to split our string, and then accumulate our values into an empty string that becomes a reverse of our original string by the end of this operation:

function reverse(str){
  return str.split("").reduce((rev, char)=> char + rev, ''); 
}

5. recursion

And the last, but most certainly not the least approach to solving reverse string problem is recursion. Basically we are making the function call itself string.length until it hits our base case: an empty string. Every time we chop the first character of the string off using substr() method, and then add it to the end of the string.

function reverse(str){
 if(str === ""){
  return str 
 }else{
  return reverse(str.substr(1)) + str[0]
 }
}

One way to refactor our recursion would be to use ternary operator:

function reverse(str){
 return str ? reverse(str.substr(1)) + str[0] : str
}



 */