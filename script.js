// Dark Mode Toggle
function toggleDarkMode() {
document.body.classList.toggle("dark-mode");
}


// Simple Quiz
function checkQuiz(answer) {
const result = document.getElementById("quiz-result");
if (answer === 'correct') {
result.innerHTML = "✅ ถูกต้อง! AI สามารถลดการสูญเสียได้มากกว่า 20–30%";
result.style.color = "green";
} else {
result.innerHTML = "❌ ยังไม่ถูกต้อง ลองใหม่อีกครั้ง";
result.style.color = "red";
}
}
function checkQuiz() {

    const answers = {
        q1: "b",
        q2: "a",
        q3: "b",
        q4: "a",
        q5: "b"
    };

    let score = 0;

    for (let q in answers) {
        const selected = document.querySelector(
            `input[name="${q}"]:checked`
        );

        if (selected && selected.value === answers[q]) {
            score++;
        }
    }

    document.getElementById("result").innerHTML =
        `คุณได้คะแนน ${score} / 5 คะแนน 🎉`;
}
