const fahrenheitSyote = document.querySelector('input');
const fahrenheitTuloste = document.querySelector('#fahrenheit');
const celsiusTuloste = document.querySelector('#celsius');
const muunnaButton = document.querySelector('button');


function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
  }


muunnaButton.addEventListener('click', muunna);