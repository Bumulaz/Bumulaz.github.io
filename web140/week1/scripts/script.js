
let score = 0;
let hasSubmitted = false; 
// Choosing new ids
const submitBtn = document.getElementById("submitBtn");
const scoreBtn = document.getElementById("scoreBtn");
const finalScoreDisplay = document.getElementById("finalScoreDisplay");

// limit checkbox selections to only 3
const checkboxes = document.querySelectorAll('.limit');
const maxAllowed = 3;
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    const checkedCount = document.querySelectorAll('.limit:checked').length;
    if (checkedCount > maxAllowed) {
      this.checked = false;
      alert("You can only select up to 3 options.");
    }
  });
});

// Check answers 
function gradeQuiz() {
    // If they already submitted, don't grade again
    if (hasSubmitted) {
        return; 
    }
    
    // Reset score to 0 before grading 
    score = 0;

    // question 1
    let q1Answer = document.getElementById("q1").value;
    let fb1 = document.getElementById("fb1");
    
    if (q1Answer === "year2") { //if they choose 1945
        fb1.textContent = "Correct!";
        fb1.style.color = "green";
        score++; // Increase score by 1
    } else {
        fb1.textContent = "Incorrect. Try again!";
        fb1.style.color = "red";
    }

    // question 2
    let q2Answer = document.getElementById("q2").value;
    let fb2 = document.getElementById("fb2");
    if (q2Answer === "PearlHarbor") {
        fb2.textContent = "Correct!";
        fb2.style.color = "green";
        score++;
    } else {
        fb2.textContent = "Incorrect. Try again!";
        fb2.style.color = "red";
    }

    // --- QUESTION 3 (Checkboxes) ---
    let stalin = document.getElementById("stalin").checked;
    let roosevelt = document.getElementById("roosevelt").checked;
    let churchhill = document.getElementById("churchhill").checked;
    let goebbels = document.getElementById("goebbels").checked;
    let macarthur = document.getElementById("macarthur").checked;
    let fb3 = document.getElementById("fb3");

    if (stalin && roosevelt && churchhill && !goebbels && !macarthur) {
        fb3.textContent = "Correct!";
        fb3.style.color = "green";
        score++;
    } else {
        fb3.textContent = "Incorrect. Try again!";
        fb3.style.color = "red";
    }

    // --- QUESTION 4 ---
    let q4Answer = document.getElementById("q4").value;
    let fb4 = document.getElementById("fb4");
    if (q4Answer === "proj2") { // if they choose Project Manhattan
        fb4.textContent = "Correct!";
        fb4.style.color = "green";
        score++;
    } else {
        fb4.textContent = "Incorrect. Try again!";
        fb4.style.color = "red";
    }

    // --- QUESTION 5 (Radio buttons) ---
    let q5No = document.getElementById("no").checked; // correct answer since Hitler was an Austrian Man
    let fb5 = document.getElementById("fb5");
    if (q5No) { 
        fb5.textContent = "Correct!";
        fb5.style.color = "green";
        score++;
    } else {
        fb5.textContent = "Incorrect. Try again!";
        fb5.style.color = "red";
    }

    // Mark quiz as submitted so score can't be spammed
    hasSubmitted = true; 
}

// Show Final Score
function showScore() {
    if (hasSubmitted === false) {
        // Changing webpage content using JavaScript
        finalScoreDisplay.textContent = "Please click 'Submit' to check your answers first!";
        finalScoreDisplay.style.color = "orange";
    } else {
        finalScoreDisplay.textContent = "Your Score: " + score + " out of 5";
        finalScoreDisplay.style.color = "black";
    }
}

submitBtn.addEventListener("click", gradeQuiz);
scoreBtn.addEventListener("click", showScore);