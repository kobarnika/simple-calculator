const display = document.getElementById("display");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const value = event.target.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else if (value === "±") {
      if (display.value) {
        display.value = String(-parseFloat(display.value));
      }
    } else {
      display.value += value;
    }
  }
});
