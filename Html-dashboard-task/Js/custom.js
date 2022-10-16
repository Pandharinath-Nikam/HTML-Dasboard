var ctx = document.getElementById("myChart").getContext("2d");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "",
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "",
    ],
    datasets: [
      {
        data: [, 45, 29, 38, 55, 42, 47, 47, 40, 40, 58, 74, 78],
        label: "Performance of Property vs Market Average",
        fill: true,
        borderColor: "rgb(113, 85, 196)",
        lineTension: 0.4,
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});

// **************************************************************

var ctx = document.getElementById("myChart1").getContext("2d");

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [15, 8, 10, 20, 5, 13, 25, 6, 4, 13, 15, 25, 10, 7],
      },
    ],
  },
  options: {
    responsive: false,
    backgroundColor: "rgb(113, 85, 196)",
    barThickness: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },

      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
});

// *******************************************************

var ctx = document.getElementById("myChart2").getContext("2d");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        data: [35, 30, 35, 23, 30, 60, 45, 10, 15],
        borderColor: ["yellow"],
      },
      {
        data: [18, 15, 5, 50, 10, 15, 6, 32, 15],
        borderColor: ["blue"],
      },
    ],
  },
  options: {
    responsive: false,
    backgroundColor: "white",
    barThickness: 1,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },

      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
});

// *****************************************************

var ctx = document.getElementById("myChart3").getContext("2d");

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    datasets: [
      {
        data: [15, 8, 7, 20, 5, 9, 25, 8, 9, 4, 26, 8, 8, 20, 16, 5, 15, 13],
        backgroundColor: [
          "red",
          "lightgreen",
          "red",
          "lightgreen",
          "lightgreen",
          "lightgreen",
          "red",
          "lightgreen",
          "lightgreen",
          "red",
          "lightgreen",
          "red",
          "lightgreen",
          "lightgreen",
          "red",
          "lightgreen",
          "lightgreen",
          "red",
        ],
      },
    ],
  },
  options: {
    responsive: false,
    backgroundColor: "rgb(113, 85, 196)",
    barThickness: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },

      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  },
});

// **********************************************************

var ctx = document.getElementById("myChart4").getContext("2d");

var myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["GOOGLE", "TWEETER", "PINTEREST", "OTHERS", "FACEBOOK"],
    datasets: [
      {
        data: [25, 14, 11, 07, 43],
        backgroundColor: ["blue", "cyan", "yellow", "white", "pink"],
        borderColor: "#fff",
      },
    ],
  },

  options: {
    responsive: false,
    backgroundColor: "white",
    barThickness: 2,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },

      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
});
