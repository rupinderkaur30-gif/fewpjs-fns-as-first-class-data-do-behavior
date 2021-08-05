/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  const hourInString = time.split(':');
  const hourInInt = parseInt(hourInString, 10);
  if (hourInInt < 12) {
    return ("Good Morning");
  }
  else if(hourInInt > 17) {
    return ("Good Evening");
  }
  return ("Good Afternoon");
}
let testContent = "TEST"
function displayMessage(testcontent){
document.getElementById("greeting").testcontent = testcontent;
}