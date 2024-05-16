function calculate() {
  var inputNumber = document.getElementById('inputNumber').value;
  var dividedValue = 468 / inputNumber;
  var multipliedValue = dividedValue * 12;
  document.getElementById('result').innerHTML = "Result: " + multipliedValue;
  document.getElementById('result').style.display = "block";
  document.getElementById('bendButton').style.display = "inline-block";
}

function showBendButton() {
  var additionalButtons = document.getElementById('additionalButtons');
  if (additionalButtons.style.display === "none") {
    additionalButtons.style.display = "block";
  } else {
    additionalButtons.style.display = "none";
  }
}

function minusTo2() {
  var result = parseFloat(document.getElementById('result').innerHTML.split(": ")[1]);
  var minusValue = result - 2;
  document.getElementById('result').innerHTML = "Result: " + minusValue;
}

function minusTo2Point5() {
  var result = parseFloat(document.getElementById('result').innerHTML.split(": ")[1]);
  var minusValue = result - 2.5;
  document.getElementById('result').innerHTML = "Result: " + minusValue;
}

function minusTo3() {
  var result = parseFloat(document.getElementById('result').innerHTML.split(": ")[1]);
  var minusValue = result - 3;
  document.getElementById('result').innerHTML = "Result: " + minusValue;
}

function minusTo3Point5() {
  var result = parseFloat(document.getElementById('result').innerHTML.split(": ")[1]);
  var minusValue = result - 3.5;
  document.getElementById('result').innerHTML = "Result: " + minusValue;
}

function minusTo4() {
  var result = parseFloat(document.getElementById('result').innerHTML.split(": ")[1]);
  var minusValue = result - 4;
  document.getElementById('result').innerHTML = "Result: " + minusValue;
}

function minusTo4Point5() {
  var result = parseFloat(document.getElementById('result').innerHTML.split(": ")[1]);
  var minusValue = result - 4.5;
  document.getElementById('result').innerHTML = "Result: " + minusValue;
}

function minusTo5() {
  var result = parseFloat(document.getElementById('result').innerHTML.split(": ")[1]);
  var minusValue = result - 5;
  document.getElementById('result').innerHTML = "Result: " + minusValue;
}

function minusTo5Point5() {
  var result = parseFloat(document.getElementById('result').innerHTML.split(": ")[1]);
  var minusValue = result - 5.5;
  document.getElementById('result').innerHTML = "Result: " + minusValue;
}


