
// Function that Finds the longest word in a string
function findLongestWordLength(str) {
  var words = str.split(" ");
  var maxLength = 0;

  for(let i = 0; i < words.length; i++){
    if (words[i].length > maxLength){
      maxLength = words[i].length;
    }
  }

  return  `The longest word has ${maxLength} characters`;
}

function resetButton() { 
  document.getElementById("text").value = "";  // resets the values in the input/output boxes to empty
  document.getElementById("output").value = "";

}

function findLenButton() {
  const val = document.getElementById("text").value; // get the value from your text box here
  
  document.getElementById("output").value = findLongestWordLength(val); // displays the result in the output box



}

