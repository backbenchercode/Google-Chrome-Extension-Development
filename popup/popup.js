const inInput = document.getElementById("inches-input");
inInput.addEventListener("keyup", (e) => {
  const inches = parseFloat(e.target.value);
  if (isNaN(inches)) {
    document.getElementById("result").innerHTML = 0;
  } else {
    document.getElementById("result").innerHTML = inches * 2.54;
  }
});
