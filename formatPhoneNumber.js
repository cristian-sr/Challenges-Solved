/*
*We are given a string S representing a phone number, which we would like to reformat. 
*String S consists of N characters: digits, spaces and/or dashes. It contains at least two digits.
*
*Spaces and dashes in string S can be ignored. We want to reformat the given phone number in such a way that the digits are 
*grouped in blocks of length three, separated by single dashes. If necessary, the final block or the last two blocks can be of length two.
*
*For example, given string S = "00-44 48 5555 8361", we would like to format it as 004-448-555-583-61.
*Write a function function solution(S);
*that, given a string S representing a phone number, returns this phone number reformatted as described above.
*For example, given S = "00-44 48 5555 8361", the function should return 004-448-555-583-61. Given S = "0 - 22 1985--324", 
*the function should return 022-198-53-24. Given S = "555372654", the function should return 555-372-654.
*
*Assume that: N is an integer within the range [2..100]; string S consists only of digits (0−9), 
*spaces and/or dashes (-); string S contains at least two digits. In your solution, focus on correctness. 
*The performance of your solution will not be the focus of the assessment.
*/

//SOLUTION FUNCTION

const S = "0 - 22 1985--324";
const final = formatString(S);
alert(final);

const formatString = S =>{ S.replace(/\D/g,'').replace(/(\d{3})(?!$)/g, '$1-').replace(/(\d)-(\d)$/, '-$1$2'); }

/*
ES2015
var s = "0 - 22 1985--324";
var final = formatString(s);
alert(final);

function formatString(S){
	return S.replace(/\D/g,'').replace(/(\d{3})(?!$)/g, '$1-').replace(/(\d)-(\d)$/, '-$1$2');
}
*/

/*other solutions
SHORT

function formatString(S){ return S.replace(/\D/g,'').replace(/(\d{3})(?!$)/g, '$1-').replace(/(\d)-(\d)$/, '-$1$2'); }



function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3]
  }
  return null
}



--------------------------------
 WITH OPTIONAL +1 international code:

function formatPhoneNumber(phoneNumberString) {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    var intlCode = (match[1] ? '+1 ' : '')
    return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
  }
  return null
}
formatPhoneNumber('+12345678900') // => "+1 (234) 567-8900"
formatPhoneNumber('2345678900')   // => "(234) 567-8900"

*/

