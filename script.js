//display numbers
let showResult = document.querySelector("#numbers");

/////  array to handle operations and function for performing calculations
let calculationArray = [];
const calculate = () => {
    for(let i=0; i < calculationArray.length; i++){
        if(calculationArray[i] === "."){
            if(isNaN(parseFloat(calculationArray[i+1])) || !calculationArray[i+1]){
                return "Error";
            }
        }
    }
    let updatedInput = calculationArray.join("")
                                        .split(" ");
    for ( let i = 0; i < updatedInput.length; i++){ //remove any empty strings
        if(updatedInput[i] === ""){
            updatedInput.splice(i, 1);
        }
        if(updatedInput[i] === "-"){
        if(isNaN(parseFloat(updatedInput[i-1]))){
            updatedInput.splice(i, 2, `-${updatedInput[i+1]}`)
        }
    }
}

    for (let i = 0; i < updatedInput.length; i++){
        if(updatedInput[i] === "*" || updatedInput[i] === "/" || updatedInput[i] === "+" || updatedInput[i] === "-"){
            if(isNaN(parseFloat(updatedInput[i-1])) || isNaN(parseFloat(updatedInput[i+1]))){
                return "Error";
            }}  
        }
    while(updatedInput.length > 1){
        for (let i = 0; i< updatedInput.length;i++){
            if(updatedInput[i] === "*" || updatedInput[i] === "/"){ //multiplication / division first
                if(updatedInput[i] ==="*"){
                    updatedInput.splice(i-1, 3, updatedInput[i-1]*updatedInput[i+1]); //parse input from left
                }
                if (updatedInput[i] === "/"){
                    if(parseFloat(updatedInput[i+1]) === 0){
                        return "Error";
                    } else {
                        updatedInput.splice(i-1, 3, updatedInput[i-1]/updatedInput[i+1]);
                    }
                }
            }
        }
        for(let i=0; i < updatedInput.length; i++){
            if(updatedInput[i]==="+" || updatedInput[i] === "-"){ // additon and subtraction
                if(updatedInput[i] === "+"){ // splice so it can be parsed from left
                    updatedInput.splice(i-1, 3, parseFloat(updatedInput[i-1])+parseFloat(updatedInput[i+1]));
                }
                if(updatedInput[i] === "-"){
                    updatedInput.splice(i-1, 3, updatedInput[i-1]-updatedInput[i+1]);
                }
            }
        }
        return updatedInput;
    }
}

//clear display and reset 
function clearDisplay(){
    calculationArray.length = 0;
    showResult.innerText = "0";

}

function deleteInput(){
    if(displayClear){
        showResult.innerText = showResult.innerText.slice(0, -1);
    };
    if(showResult.innerText === ""){
        showResult.innerText = 0;
    };
};

const numbers = document.querySelectorAll("#one, #two, #three, #four, #five, #six, #sev, #eight, #nine, #zero");
numbers.forEach(function(numButton){
    numButton.addEventListener("click", function(e){
        if (calculationArray.includes("NAN")){
            calculationArray.length = 0;
        }
        calculationArray.push(e.target.innerText);
        showResult.textContent = calculationArray.join("");
    });
});

const divide = document.querySelector("#divide");
    divide.addEventListener("click", function(){
        calculationArray.push(" / ");
        showResult.textContent = calculationArray.join("");
    });


const multiply = document.querySelector("#multiply");

    multiply.addEventListener("click", function(){
        calculationArray.push(" * ");
        showResult.textContent = calculationArray.join("");
    });

const subtract = document.querySelector("#sub");

    subtract.addEventListener("click", function(){
        calculationArray.push(" - ");
        showResult.textContent = calculationArray.join("");
    });

const add = document.querySelector("#add");

    add.addEventListener("click", function(){
        calculationArray.push(" + ");
        showResult.textContent = calculationArray.join("");
    });


const decimalbutton = document.querySelector("#comm");
    decimalbutton.addEventListener("click", function(){
        if(calculationArray[calculationArray.length - 1] !== "."){
            calculationArray.push(".");
            showResult.textContent = calculationArray.join("");
        }
});

const equalsButton = document.querySelector("#equal");
    equalsButton.addEventListener("click", function(){
        let result = calculate();
        if(result === "Error"){
            calculationArray = [result];
        }
        else {
            calculationArray = result.toString().split("");
        }
        showResult.textContent = calculationArray.join("");
  
});

const clearButton = document.querySelector("#C");
    clearButton.addEventListener("click", function(){
        calculationArray.length = 0;
        clearDisplay();
});

const deleteButton = document.querySelector("#del");
    deleteButton.addEventListener("click", function(){
        calculationArray.pop();
        if(calculationArray.length === 0){
            showResult.textContent = 0;
            return;
        }
        showResult.textContent = calculationArray.join("");
});

//listener function for using keyboard
document.addEventListener("keydown", (e)  => {
    if(isFinite(e.key)) {           // check to see that number is a valid number
        calculationArray.push(e.key);
        showResult.textContent = calculationArray.join("");
    } else if (e.key == ","){
        if(!showResult.innerText.includes(".")){
        calculationArray.push(".");
        showResult.textContent = calculationArray.join("");
        };
    } else if (e.key == "/"){
        calculationArray.push(" / ");
        showResult.textContent = calculationArray.join("");
    } 
    else if (e.key == "*"){
        calculationArray.push(" * ");
        showResult.textContent = calculationArray.join("");
    } 
    else if (e.key == "-"){
        calculationArray.push(" - ");
        showResult.textContent = calculationArray.join("");
    } 
    else if (e.key == "+"){
        calculationArray.push(" + ");
        showResult.textContent = calculationArray.join("");
    }
    else if (e.key == "Enter"){
        let result = calculate();
        if(result === "NAN"){
            calculationArray = [result];
        }
        else {
            calculationArray = result.toString().split("");
        }
        showResult.textContent = calculationArray.join("");
  
    } else if (e.key == "Backspace"){
        calculationArray.pop();
        if(calculationArray.length === 0){
            showResult.textContent = 0;
            return;
        }
        showResult.textContent = calculationArray.join("");
    }
});

clearDisplay();