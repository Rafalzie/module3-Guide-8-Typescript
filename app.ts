const number1 = document.getElementById("num1") as HTMLInputElement
const printButton = document.getElementById("printBtn") as HTMLButtonElement
const printValue = document.getElementById("enteredNumber") as HTMLOutputElement

function printEnteredValue(): void{
    const num1 = parseFloat(number1.value);
    printValue.textContent= num1.toString();

}

printButton.addEventListener("click", printEnteredValue);
