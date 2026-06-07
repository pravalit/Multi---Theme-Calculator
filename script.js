const display = document.getElementById("display");
const themeSwitcher = document.getElementById("themeSwitcher");

let state = {
    expression: ""
};

function updateDisplay() {
    display.value = state.expression;
}

function append(value) {
    state.expression += value;
    updateDisplay();
}

function clearDisplay() {
    state.expression = "";
    updateDisplay();
}

function deleteLast() {
    state.expression =
    state.expression.slice(0,-1);
    updateDisplay();
}

function calculate() {

    try{
        state.expression =
        eval(state.expression).toString();

        updateDisplay();
    }

    catch{
        display.value = "Error";
    }
}

themeSwitcher.addEventListener("change",(e)=>{

    const theme=e.target.value;

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "theme",
      theme
    );
});

window.onload=()=>{

    const savedTheme=
    localStorage.getItem("theme")
    || "dark";

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );

    themeSwitcher.value=savedTheme;
};
