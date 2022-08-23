function selectedFive(playerName, playerButton) {
  document.getElementById(playerButton).addEventListener("click", function () {
    const nameGet = document.getElementById(playerName);
    const nameGotten = nameGet.innerText;

    const createElement = document.createElement("li");
    const putElement = document.createTextNode(nameGotten);
    createElement.appendChild(putElement);

    const createList = document.getElementById("selected-list");
    createList.appendChild(createElement);

    const buttonDisable = document.getElementById(playerButton);
    buttonDisable.disabled = true;

    buttonDisable.style.background = "gray";
    buttonDisable.style.color = "white";

    let selectedFinalList = document.querySelectorAll("li");
    let selectedAmount = selectedFinalList.length;

    if (selectedAmount > 5) {
      window.alert("You can not add more than five");
      createList.removeChild(createElement);
      return;
    }
  });
}

selectedFive("messi-name", "messi-select-btn");
selectedFive("neymar-name", "neymar-select-btn");
selectedFive("ramos-name", "ramos-select-btn");
selectedFive("hakimi-name", "hakimi-select-btn");
selectedFive("icardi-name", "icardi-select-btn");
selectedFive("paredes-name", "paredes-select-btn");

//calculations

document.getElementById("calculate-btn").addEventListener("click", function () {
  const playerInput = document.getElementById("per-player-field");

  const playerInputAmountString = playerInput.value;
  const playerInputAmount = parseFloat(playerInputAmountString);

  let selectedFinalListForCalculation = document.querySelectorAll("li");
  let selectedAmountCalculation = selectedFinalListForCalculation.length;

  const playerExpense = playerInputAmount * selectedAmountCalculation;

  const playerExpenseOutput = document.getElementById("player-expense-result");
  playerExpenseOutput.innerText = playerExpense;
});

//calculate total

document
  .getElementById("calculate-total-btn")
  .addEventListener("click", function () {

    const playerExpense = document.getElementById("player-expense-result");
    const managerExpense = document.getElementById("manager-expense");
    const coachExpense = document.getElementById("manager-expense");
    const totalExpense = document.getElementById("total-expense");

    const totalExpenseString = parseFloat(playerExpense.innerText) + parseFloat(managerExpense.value) + parseFloat(coachExpense.value);

    totalExpense.innerText = parseFloat(totalExpenseString);

  });
