/* Created by: Venika Sem
 * Created on: May 2022
 * This file contains the JS functions for index.html 
*/

'use strict'

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-HTML/sw.js", {
    scope: "/ICS2O-Unit5-06-HTML/",
  })
}

/**
 * This function calculate the value of pi.
 */
function calculate() {
  var numberValue = document.getElementById("number-value").value
  var currentAction = "minus"
  var number = 1
  var pi
  
  pi = (4 / number)
  while (numberValue > 1) {
    if (currentAction == "minus") {
      number = number + 2
      pi = pi - (4 / number)
      currentAction = "plus"
    } else if (currentAction == "plus") {
      number = number + 2
      pi = pi + (4 / number)
      currentAction = "minus"
    }
    numberValue = numberValue - 1
  }
  currentAction = "minus"
  number = 1
  document.getElementById("result").innerHTML = "<p>π is equal to " + pi + "</p>"
}

  // output
  document.getElementById('result').innerHTML = firstInteger + " x " + addedNumber + " = " + answer;