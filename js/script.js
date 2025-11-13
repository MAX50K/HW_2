const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", "q"];
let currentKeyIndex = 0;
const keyElement = document.getElementById("key");

function startGame() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyElement.textContent = keys[currentKeyIndex].toUpperCase();
  PNotify.success({
    text: "Нова гра розпочата! Натисни правильну клавішу.",
    delay: 1500
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === keys[currentKeyIndex]) {
    PNotify.success({
      text: `Правильно! Ви натиснули "${event.key.toUpperCase()}"`,
      delay: 1000
    });
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyElement.textContent = keys[currentKeyIndex].toUpperCase();
  } else {
    PNotify.error({
      text: `Неправильно! Ви натиснули "${event.key.toUpperCase()}"`,
      delay: 1500
    });
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

document.getElementById("new-game").addEventListener("click", startGame);

startGame();


const chartData = {
  labels: [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "rgba(33, 150, 243, 0.2)",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: true,
      tension: 0.3
    },
  ],
};

const ctx = document.getElementById("sales-chart").getContext("2d");
const salesChart = new Chart(ctx, {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: { color: "#333" },
      },
      title: {
        display: true,
        text: "Продажі за останній місяць",
        font: { size: 18 }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
      }
    }
  }
});
