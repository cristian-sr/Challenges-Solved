/**
 * A non-negative integer variable V is given. There are two actions available that modify its value:
 * - if V is odd, subtract 1 from it
 * - if V is even, divide it by 2
 *
 * These actions are performed until the value of V becomes 0.
 *
 * For example, if V initially contains value 28, it will become 0 after seven steps:
 * - V contains value 28, which is even: divide by 2 and obtain 14
 * - V contains value 14, which is even: divide by 2 and obtain 7
 * - V contains value 7, which is odd: subtract 1 and obtain 6
 * - V contains value 6, which is even: divide by 2 and obtain 3
 * - V contains value 3, which is odd: subtract 1 and obtain 2
 * - V contains value 2, which is even: divide by 2 and obtain 1
 * - V contains value 1, which is odd: subtract 1 and obtain 0
 *
 * Write a function:
 *  class Solution { public int solution(String s); }
 * that, given a zero-indexed string S consisting of N characters containing a binary representation of the initial value of variable V, returns the number of stpes after which the value of V will become 0, as described above.
 *
 * Assume that:
 * - N is an integer within the range [1 .. 1,000,000]
 * - string S consists only of the characters "0" and/or "1"
 * - the binary representation is big-endian, i.e. the first character of string S corresponds to the most significant bit;
 * - the binary representation may contain leading zeros
 *
 * For example, given string S = "011100" the function should return 7, becaus string S represents the number 28 and 28 becomes 0 after seven steps, as explained above.
 *
 * Complexity:
 * - expected worst-case time complexity is O(N)
 * - expected worst-case space complexity is O(1) (not counting the storage required for input arguments)
 *
 */

 /*


There is a pattern which allows you to know the optimal next step in constant time. In fact, there can be cases where there are two equally optimal choices -- in that case one of them can be derived in constant time.

If you look at the binary representation of n, and its least significant bits, you can make some conclusions about which operation is leading to the solution. In short:

    if the least significant bit is zero, then divide by 2
    if n is 3, or the 2 least significant bits are 01, then subtract
    In all other cases: add.

Proof

If the least significant bit is zero, the next operation should be the division by 2. We could instead try 2 additions and then a division, but then that same result can be achieved in two steps: divide and add. Similarly with 2 subtractions. And of course, we can ignore the useless subsequent add & subtract steps (or vice versa). So if the final bit is 0, division is the way to go.

Then the remaining 3-bit patterns are like **1. There are four of them. Let's write a011 to denote a number that ends with bits 011 and has a set of prefixed bits that would represent the value a:

    a001: adding one would give a010, after which a division should occur: a01: 2 steps taken. We would not want to subtract one now, because that would lead to a00, which we could have arrived at in two steps from the start (subtract 1 and divide). So again we add and divide to get a1, and for the same reason we repeat that again, giving: a+1. This took 6 steps, but leads to a number that could be arrived at in 5 steps (subtract 1, divide 3 times, add 1), so clearly, we should not perform the addition. Subtraction is always better.

    a111: addition is equal or better than subtraction. In 4 steps we get a+1. Subtraction and division would give a11. Adding now would be inefficient compared to the initial addition path, so we repeat this subtract/divide twice and get a in 6 steps. If a ends in 0, then we could have done this in 5 steps (add, divide three times, subtract), if a ends in a 1, then even in 4. So Addition is always better.

    a101: subtraction and double division leads to a1 in 3 steps. Addition and division leads to a11. To now subtract and divide would be inefficient, compared to the subtraction path, so we add and divide twice to get a+1 in 5 steps. But with the subtraction path, we could reach this in 4 steps. So subtraction is always better.

    a011: addition and double division leads to a1. To get a would take 2 more steps (5), to get a+1: one more (4). Subtraction, division, subtraction, double division leads to a (5), to get a+1 would take one more step (6). So addition is at least as good as subtraction. There is however one case not to overlook: if a is 0, then the subtraction path reaches the solution half-way, in 2 steps, while the addition path takes 3 steps. So addition is always leading to the solution, except when n is 3: then subtraction should be chosen.

So for odd numbers the second-last bit determines the next step (except for 3).*/


//SOLUTION

function stepCount(n) {
    var count = 0
    while (n > 1) {
        if (n % 2 == 0)                // bitmask: *0
            n = n / 2
        else if (n == 3 || n % 4 == 1) // bitmask: 01
            n = n - 1
        else                           // bitmask: 11
            n = n + 1
        count += 1
    }
    return count
}

// I/O
var input = document.getElementById('input')
var output = document.getElementById('output')
var calc = document.getElementById('calc')

calc.onclick = function () {
  var n = +input.value
  if (n > 9007199254740991) { // 2^53-1
    alert('Number too large for JavaScript')
  } else {
    var res = stepCount(n)
    output.textContent = res
  }
}

//TEST CASE
/*
<input id="input" value="123549811245">
<button id="calc">Caluclate steps</button><br>
Result: <span id="output"></span>
*/
