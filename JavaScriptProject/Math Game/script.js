document.addEventListener('DOMContentLoaded', function () {
    const problemElement = document.getElementById('problem');
    const answerElement = document.getElementById('answer');
    const resultElement = document.getElementById('result');
    const submitButton = document.getElementById('submit');

    function generateProblem() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
        let problem = `${num1} ${operator} ${num2}`;
        problemElement.textContent = problem;
    }

    submitButton.addEventListener('click', function () {
        const [num1, oper, num2] = problemElement.textContent.split(' ');
        const correctAnswer = eval(num1 + oper + num2);
        const userAnswer = parseFloat(answerElement.value.trim());

        if (userAnswer === correctAnswer) {
            resultElement.textContent = "Correct! 🎉";
        } else {
            resultElement.textContent = `Incorrect. The correct answer was ${correctAnswer}. 😞`;
        }

        // Generate a new problem after checking answer
        setTimeout(function () {
            answerElement.value = '';
            resultElement.textContent = '';
            generateProblem();
        }, 1500); // 1.5 seconds delay before next problem
    });

    // Initialize the first problem
    generateProblem();
});
