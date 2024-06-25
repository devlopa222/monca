window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

function checkAnswer(button, correctAnswer) {
    const answer = button.parentElement.querySelector('.answer');
    if (button.textContent === correctAnswer) {
        answer.textContent = 'Correct!';
        answer.style.color = '#28a745';
    } else {
        answer.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
        answer.style.color = '#dc3545';
    }
    answer.style.display = 'block';
}

function checkTypeAnswer(input, correctAnswer) {
    const answer = input.parentElement.querySelector('.answer');
    if (input.value.toLowerCase() === correctAnswer.toLowerCase()) {
        answer.textContent = 'Correct!';
        answer.style.color = '#28a745';
    } else {
        answer.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
        answer.style.color = '#dc3545';
    }
    answer.style.display = 'block';
}
