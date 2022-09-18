//Get numbers from the DOM
function getInput() {

   document.getElementById("alertText").classList.add("hideMe");

   document.getElementById("alertTable").classList.add("hideMe");
    
    let answers = "";
    
    let fizzNumber = document.getElementById("fizzNumber").value;
    let buzzNumber = document.getElementById("buzzNumber").value;

    let choice = document.getElementById('selector').value;

    let checked = document.getElementById('addColor').checked;

    fizzNumber = parseInt(fizzNumber);
    buzzNumber = parseInt(buzzNumber);

    if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber)) {
        //Call checkDivisible function
        if ((fizzNumber > 0) && (buzzNumber > 0)) {

            switch(choice){
                case 'ternaryWithTable':
                    answers = checkDivisibleA(fizzNumber, buzzNumber);
                    displayTable(answers);
                    break;
                case 'ternaryWithText':
                    answers = checkDivisibleB(fizzNumber, buzzNumber);
                    displayText(answers);
                    break;
                case 'switchWithText':
                    answers = checkDivisibleC(fizzNumber, buzzNumber);
                    displayText(answers);
                    break;
                case 'ifStatementWithText':
                    answers = checkDivisibleD(fizzNumber, buzzNumber);
                    displayText(answers);
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
//Calculate if the number is divisible by Fizz, Buzz, or both Fizz and Buzz
//This solution is for the "Ternary Operator with Table Output" option    
function checkDivisibleA(fizz,buzz) {
    let answers = [];

    for (let i = 1; i <= 100; i++) {
        answers[i] = ((i % fizz == 0 ? 'Fizz' : '') + (i % buzz == 0 ? 'Buzz' : '') || i);        
    }

    return answers;
}

//--------------------------------------------------------------------------------
//Calculate if the number is divisible by Fizz, Buzz, or both Fizz and Buzz
//This solution is for the "Ternary Operator with Text Output" option
function checkDivisibleB(fizz,buzz) {
    let answers = "";

    for (let index = 1; index <= 100; index++){
            answers += ((index % fizz == 0 ? 'Fizz' : '') + (index % buzz == 0 ? 'Buzz' : '') || index) + ' ';
    }

    return answers;
}

//--------------------------------------------------------------------------------
//Calculate if the number is divisible by Fizz, Buzz, or both Fizz and Buzz
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
//Calculate if the number is divisible by Fizz, Buzz, or both Fizz and Buzz
//This solution is for the "If Statement with Text Output" option
function checkDivisibleD(fizz, buzz) {

    let answers = "";

    //We want to get all numbers from start to end
    for(let index = 1; index <= 100; index++){
        //This will execute in a loop until index = endValue
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

//Fuction to display the answers as a single string of text
function displayText(answers) {
    
    //Write the answer to the "resultsText" inner HTML
    document.getElementById("resultsText").innerHTML = answers;

    //Turn on the alert box
    document.getElementById("alertText").classList.remove("hideMe");
}

function displayTable(answers) {

    //Create a string of HTML using the 2 templates on app.html that formats the data in a 5 x 20 table
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row-items');

    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = headTemplate.innerHTML;

    for (let i = 1; i <= 100; i+=5) {
        resultsHTML += templateHTML.replace('{{val1}}', answers[i])
                                   .replace('{{val2}}', answers[i+1])
                                   .replace('{{val3}}', answers[i+2])
                                   .replace('{{val4}}', answers[i+3])
                                   .replace('{{val5}}', answers[i+4]);        
    }

    //Write the answer to "resultsTable" inner HTML
    document.getElementById('resultsTable').innerHTML = resultsHTML;

    //Turn on the alert box
    document.getElementById("alertTable").classList.remove("hideMe");
}