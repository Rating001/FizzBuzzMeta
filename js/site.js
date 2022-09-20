//Get numbers from the DOM, make them whole numbers, check to see if they are numbers, run the proper set of functions
function getInput() {
    //Hiding the two alert boxes each run so there isn't an empty box before or after the proper displayed text/table
    document.getElementById("alertText").classList.add("hideMe");
    document.getElementById("alertTable").classList.add("hideMe");
    
    let answers = "";
    let coloredAnswers = "";

    let fizzNumber = document.getElementById("fizzNumber").value;
    let buzzNumber = document.getElementById("buzzNumber").value;

    let choice = document.getElementById('selector').value;

    let checked = document.getElementById('addColor').checked;

    fizzNumber = parseInt(fizzNumber);
    buzzNumber = parseInt(buzzNumber);

    if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber)) {

        if ((fizzNumber > 0) && (buzzNumber > 0)) {

            switch(choice){
                case 'ternaryWithTable':
                    answers = checkDivisibleA(fizzNumber, buzzNumber);
                    displayTable(answers,checked);
                    break;
                case 'ternaryWithText':
                    answers = checkDivisibleB(fizzNumber, buzzNumber);
                    if (checked) {
                        coloredAnswers = addColorText(answers);
                        displayText(coloredAnswers);
                    } else {
                        displayText(answers);
                    }
                    break;
                case 'switchWithText':
                    answers = checkDivisibleC(fizzNumber, buzzNumber);
                    if (checked) {
                        coloredAnswers = addColorText(answers);
                        displayText(coloredAnswers);
                    } else {
                        displayText(answers);
                    }
                    break;
                case 'ifStatementWithText':
                    answers = checkDivisibleD(fizzNumber, buzzNumber);
                    if (checked) {
                        coloredAnswers = addColorText(answers);
                        displayText(coloredAnswers);
                    } else {
                        displayText(answers);
                    }
                    break;
            }

        } else {
            alert("You must enter numbers greater than 0.");
        }
    } else {
        alert("You must enter integers.");
    }
    }
    
//--------------------------------------------------------------------------------
//This solution is for the "Ternary Operator with Table Output" option    
function checkDivisibleA(fizz,buzz) {
    let answers = [];

    for (let i = 1; i <= 100; i++) {
        answers[i] = ((i % fizz == 0 ? 'Fizz' : '') + (i % buzz == 0 ? 'Buzz' : '') || i);        
    }

    return answers;
}

//--------------------------------------------------------------------------------
//This solution is for the "Ternary Operator with Text Output" option
function checkDivisibleB(fizz,buzz) {
    let answers = "";

    for (let index = 1; index <= 100; index++){
            answers += ((index % fizz == 0 ? 'Fizz' : '') + (index % buzz == 0 ? 'Buzz' : '') || index) + ' ';
    }

    return answers;
}

//--------------------------------------------------------------------------------
//This solution is for the "Boolean Switch Case with Text Output" option
function checkDivisibleC(fizz, buzz) {
    let answers = "";
    let fizzy = false;
    let buzzy = false;

    for (let i = 1; i <= 100; i++) {
        fizzy = (i % fizz == 0);
        buzzy = (i % buzz == 0);
        switch(true) {
            case fizzy && buzzy: {
                answers += 'FizzBuzz ';
                break;
            }
            case fizzy: {
                answers += 'Fizz ';
                break;
            }
            case buzzy: {
                answers += 'Buzz ';
                break;
            }
            default: {
                answers += (i + ' ');
                break;
            }
        }
    }

    return answers;
}

//--------------------------------------------------------------------------------
//This solution is for the "If Statement with Text Output" option
function checkDivisibleD(fizz, buzz) {

    let answers = "";

    for(let index = 1; index <= 100; index++){
        if ((index % fizz ==0) && (index % buzz ==0)) {
            answers += "FizzBuzz ";
        }   else if (index % buzz == 0) {
            answers += "Buzz ";
        }   else if (index % fizz == 0) {
            answers += "Fizz ";
        } else {
            answers += index + ' ';
        }
    }

    return answers;
}

//--------------------------------------------------------------------------------
//Add color to the string of answers
function addColorText(answers) {

    coloredAnswers = "";
    let splitString = answers.split(" ");

    for (i = 0 ; i <= 99; i++) {
        switch (splitString[i]) {
            case 'FizzBuzz': {
                coloredAnswers += `<span class="FizzBuzz">FizzBuzz</span> `;
                break;
            }
            case 'Fizz': {
                coloredAnswers += `<span class="Fizz">Fizz</span> `;
                break;
            }
            case 'Buzz': {
                coloredAnswers += `<span class="Buzz">Buzz</span> `;
                break;
            }
            default: {
                coloredAnswers += `<span class="nonFizzBuzz">${splitString[i]}</span> `;
                break;
            }
        }
    }

    return coloredAnswers;
}

//--------------------------------------------------------------------------------
//Fuction to display the answers as a single string of text
function displayText(answers) {
    
    document.getElementById("resultsText").innerHTML = answers;

    //Turn on the alert box
    document.getElementById("alertText").classList.remove("hideMe");
}

//--------------------------------------------------------------------------------
//Function to display the elements in a table
function displayTable(answers,checked) {

    let tableBody = document.getElementById('resultsTable');

    let templateRow = document.getElementById('fbTemplate');

    tableBody.innerHTML = "";

    for (let i = 1; i < 100; i += 5) {
        let tableRow = document.importNode(templateRow.content, true);
        
        //Place the TDs into an array and write values to them
        //If the color switch is on add the classes for 'Fizz', 'Buzz' and 'FizzBuzz' using the array so they can be manipulated via CSS
        let rowCols = tableRow.querySelectorAll("td");

        if (checked) {
            rowCols[0].classList.add(answers[i]);
            rowCols[0].textContent = answers[i];
        } else {
            rowCols[0].textContent = answers[i];
        }
        if (checked) {
            rowCols[1].classList.add(answers[i+1]);
            rowCols[1].textContent = answers[i+1];
        } else {
            rowCols[1].textContent = answers[i+1];
        }
        if (checked) {
            rowCols[2].classList.add(answers[i+2]);
            rowCols[2].textContent = answers[i+2];
        } else {
            rowCols[2].textContent = answers[i+2];
        }
        if (checked) {
            rowCols[3].classList.add(answers[i+3]);
            rowCols[3].textContent = answers[i+3];
        } else {
            rowCols[3].textContent = answers[i+3];
        }
        if (checked) {
            rowCols[4].classList.add(answers[i+4]);
            rowCols[4].textContent = answers[i+4];
        } else {
            rowCols[4].textContent = answers[i+4];
        }

        //Print to the table
        tableBody.appendChild(tableRow);
    }

    //Turn on the alert box
    document.getElementById("alertTable").classList.remove("hideMe");

}