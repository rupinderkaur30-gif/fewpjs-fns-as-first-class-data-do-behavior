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
  const hourInString = time.split(":");
  const hoursInInt = parseInt(hourInString,10);

  if (hoursInInt < 12) {
    return ('Good Morning');
  }
  else if (hoursInInt >=12 && hoursInInt <= 17){
    return ('Good Afternoon');
  }
  else {
  return ('Good Evening');
  }
}
function displayMessage(TEST) {
  const element = document.getElementById("greeting");
  element.innerText = TEST;
  return TEST;
}