// Simple Symbols
// ----------------------------------------------------------------------------
// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false.
// The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol.
// So the string to the left would be false.
// The string will not be empty and will have at least one letter.


function SimpleSymbols(str) {

  // code goes here
  var test=/[a-z]/gi
  str=str.split("")
  var result=true;
  for(var i=0;i<str.length;i++){
    if(test.test(str[i])){
      if(str[i-1]==="+"&&str[i+1]==="+"){
      } else {
        return false
      }
    }
  }
  return result;
}

console.log( SimpleSymbols("+d+=3=+s+") );
console.log( SimpleSymbols("f++d+") );



// Correct Sample Outputs
// ----------------------------------------------------------------------------
// Input = "+d+=3=+s+"  Output = "true"
// Input = "f++d+"      Output = "false"





// Resources
// ----------------------------------------------------------------------------




// Scratch pad
// ----------------------------------------------------------------------------
