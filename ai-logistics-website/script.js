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
const ctx = document.getElementById("statusTrendChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Completed",
        data: [84.31, 79.58, 79.89, 73.65],
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: "Service Provider Contacted",
        data: [5.88, 7.65, 7.62, 12.40],
        borderWidth: 2,
        tension: 0.4
      },
      {
        label: "Waiting for Payment",
        data: [0.00, 0.12, 0.39, 0.83],
        borderWidth: 2,
        tension: 0.4
      }
    ]
  },
  options: {
    plugins: {
      legend: { position: "top" }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Percentage (%)"
        }
      }
    }
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("statusCompareChart");
  if (!ctx) return;

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Completed (%)",
          data: [84.31, 79.58, 79.89, 73.65],
          borderWidth: 2,
          tension: 0.4
        },
        {
          label: "Service Provider Contacted (%)",
          data: [5.88, 7.65, 7.62, 12.40],
          borderWidth: 2,
          tension: 0.4
        },
        {
          label: "Waiting for Payment (%)",
          data: [0.00, 0.12, 0.39, 0.83],
          borderWidth: 2,
          tension: 0.4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top"
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Percentage (%)"
          }
        }
      }
    }
  });
});
 document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("serviceCompareChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Tier 1",
        "Tier 2",
        "Tier 3"
      ],
      datasets: [
        {
          label: "ค่าบริการเฉลี่ย",
          data: [69, 76, 96],
          borderWidth: 1
        },
        {
          label: "จำนวนชิ้นเฉลี่ย",
          data: [6, 8, 9],
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top"
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "ค่าเฉลี่ย"
          }
        }
      }
    }
  });
});
const acc = document.querySelectorAll(".accordion");

acc.forEach(btn => {
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    panel.style.display =
      panel.style.display === "block" ? "none" : "block";
  });
});
function openTab(tabName) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(c => c.style.display = "none");

  document.getElementById(tabName).style.display = "block";
}
