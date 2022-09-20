function changeCode() {

    //Getting the drop down menu's selection and sending it through to the codeUpdate (switch statement) to change the page's text.
    let choice = document.getElementById('codeSelect').value;

    codeUpdate(choice);
}

function codeUpdate(choice) {
    switch (choice) {
        case 'ternaryWithTable':
            document.getElementById('ternaryWithTable').classList.remove("hideMe");
            document.getElementById('ternaryWithText').classList.add("hideMe");
            document.getElementById('switchWithText').classList.add("hideMe");
            document.getElementById('ifStatementWithText').classList.add("hideMe");
            document.getElementById('descriptionTernaryWithTable').classList.remove("hideMe");
            document.getElementById('descriptionTernaryWithText').classList.add("hideMe");
            document.getElementById('descriptionSwitchWithText').classList.add("hideMe");
            document.getElementById('descriptionIfStatementWithText').classList.add("hideMe");
            break;
        case 'ternaryWithText':
            document.getElementById('ternaryWithTable').classList.add("hideMe");
            document.getElementById('ternaryWithText').classList.remove("hideMe");
            document.getElementById('switchWithText').classList.add("hideMe");
            document.getElementById('ifStatementWithText').classList.add("hideMe");
            document.getElementById('descriptionTernaryWithTable').classList.add("hideMe");
            document.getElementById('descriptionTernaryWithText').classList.remove("hideMe");
            document.getElementById('descriptionSwitchWithText').classList.add("hideMe");
            document.getElementById('descriptionIfStatementWithText').classList.add("hideMe");
            break;
        case 'switchWithText':
            document.getElementById('ternaryWithTable').classList.add("hideMe");
            document.getElementById('ternaryWithText').classList.add("hideMe");
            document.getElementById('switchWithText').classList.remove("hideMe");
            document.getElementById('ifStatementWithText').classList.add("hideMe");
            document.getElementById('descriptionTernaryWithTable').classList.add("hideMe");
            document.getElementById('descriptionTernaryWithText').classList.add("hideMe");
            document.getElementById('descriptionSwitchWithText').classList.remove("hideMe");
            document.getElementById('descriptionIfStatementWithText').classList.add("hideMe");
            break;
        case 'ifStatementWithText':
            document.getElementById('ternaryWithTable').classList.add("hideMe");
            document.getElementById('ternaryWithText').classList.add("hideMe");
            document.getElementById('switchWithText').classList.add("hideMe");
            document.getElementById('ifStatementWithText').classList.remove("hideMe");
            document.getElementById('descriptionTernaryWithTable').classList.add("hideMe");
            document.getElementById('descriptionTernaryWithText').classList.add("hideMe");
            document.getElementById('descriptionSwitchWithText').classList.add("hideMe");
            document.getElementById('descriptionIfStatementWithText').classList.remove("hideMe");
            break;
    }
}