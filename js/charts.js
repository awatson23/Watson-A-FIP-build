new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Crossing with the right away", "Crossing, no traffic control", "Crossing without the right away", "On sidewalk or shoulder"],
      datasets: [
        {
          label: "Number of incidents",
          backgroundColor: ["#0A69F2", "#3784F4","#6BA4F7","#A2C5F9"],
          data: [660, 476, 260, 166]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Most commonly reported pedestrian actions at accident occurence'
      }
    }
});
