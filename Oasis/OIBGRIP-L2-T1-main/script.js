const resultDisplay = document.getElementById("result");
const buttons = Array.from(document.getElementsByClassName("calculator_button"));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (resultDisplay.innerText === "0" && e.target.innerText !== "/" && e.target.innerText !== "*") {
      resultDisplay.innerText = "";
    }

    if (e.target.innerText === "AC") {
      resultDisplay.innerText = "";
    } else if (e.target.innerText === "=") {
      try {
        resultDisplay.innerText = eval(resultDisplay.innerText);
      } catch (error) {
        resultDisplay.innerText = "ERROR.";
      }
    } else {
      resultDisplay.innerText += e.target.innerText;
    }
  });
});

