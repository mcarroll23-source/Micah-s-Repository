console.log("script.js connected!");

// This code finds all of the quiz questions on the page.
const questionBlocks = document.querySelectorAll(".question-block");

// This array stores the answer selected for each question.
const selectedAnswers = [];

// This code goes through each question and finds its answer buttons.
questionBlocks.forEach(function(question, questionIndex) {
    const answerButtons = question.querySelectorAll(".answer-btn");

    // This code listens for a click on each answer button.
    answerButtons.forEach(function(button) {
        button.addEventListener("click", function() {

            // This code removes the selected class from the other answers.
            answerButtons.forEach(function(answer) {
                answer.classList.remove("selected");
            });

            // This code adds the selected class to the answer that was clicked.
            button.classList.add("selected");

            // This code stores the selected answer for this question.
            selectedAnswers[questionIndex] = button.dataset.answer;

            // This code shows the selected answers in the console for testing.
            console.log(selectedAnswers);
        });
    });
});


// This code calculates and displays the personality quiz result.
function displayResult() {

    // This code checks if the user answered every question.
    if (selectedAnswers.length < questionBlocks.length || selectedAnswers.includes(undefined)) {
        alert("Please answer all four questions before viewing your result.");
        return;
    }

    // This code keeps track of how many times each answer was selected.
    let competitive = 0;
    let strategy = 0;
    let casual = 0;
    let adventure = 0;

    // This code counts the selected answers.
    selectedAnswers.forEach(function(answer) {
        if (answer === "A") {
            competitive++;
        } else if (answer === "B") {
            strategy++;
        } else if (answer === "C") {
            casual++;
        } else if (answer === "D") {
            adventure++;
        }
    });

    // This code determines which personality has the highest score.
    let result = "";

    if (competitive >= strategy && competitive >= casual && competitive >= adventure) {
        result = "You are a Competitive Gamer! You enjoy competition, winning, and challenging yourself against other players.";
    } else if (strategy >= competitive && strategy >= casual && strategy >= adventure) {
        result = "You are a Strategy Gamer! You enjoy planning ahead, making smart decisions, and finding the best strategy.";
    } else if (casual >= competitive && casual >= strategy && casual >= adventure) {
        result = "You are a Casual Gamer! You enjoy relaxing, having fun, and playing games at your own pace.";
    } else {
        result = "You are an Adventure Gamer! You enjoy exploring new worlds, discovering new places, and experiencing new adventures.";
    }

    // This code puts the result inside the result paragraph.
    document.getElementById("result-text").textContent = result;

    // This code makes the result card visible.
    document.getElementById("result-container").style.display = "block";
}


// This code runs the displayResult function when the Show Results button is clicked.
document.getElementById("show-result").addEventListener("click", displayResult);
