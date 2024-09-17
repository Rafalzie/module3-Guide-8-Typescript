
<!DOCTYPE html>

<html>
    <title>Document</title>     - CREATES TITLE OF THE PAGE

<body>
    <h1>user input web page</h1>      - CREATES 1ST HEADING
    <p>Enter a number to print</p>      - CREATES PARAGRAPH
    <input type="number" id="num1" placeholder="Number1"> -     CREATES NUMBER FIELD
    <button id="printBtn"> Print</button>        - CREATES BUTTON WITH A NAME ON IT

    <h3> You Entered <output id="enteredNumber"></output></h3>    -  CREATES SMALLER HEADING WITH INPUT AND AUTPUT
    <script src="app.js"></script>
</body>
</html>

-------------------------TYPE SCRIPT CODE---------------------------------------

const number1 = document.getElementById("num1") as HTMLInputElement        - declares a variable whose value cannot be reassigned once it is set.      
const printButton = document.getElementById("printBtn") as HTMLButtonElement - declares a variable, takes data from HTML FILE
const printValue = document.getElementById("enteredNumber") as HTMLOutputElement   - declares a variable, TAKES DATA FROM HTML FILE

function printEnteredValue(): void{    SHOWS ENTERED VALUE
    const num1 = parseFloat(number1.value);     - converts the value of an HTML input element from a string to a floating-point number.
    printValue.textContent= num1.toString();      -  is used to update the text content of an HTML element with the string representation of a numeric value.

}

printButton.addEventListener("click", printEnteredValue);    -  used to attach an event handler to an HTML element that will execute a specified function when a particular event occurs.
