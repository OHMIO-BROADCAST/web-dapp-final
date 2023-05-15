export const barChartData = [
  {
    name: "Score",
    data: [0.15, 0.25, 0.28, 0.1, 0.25, 0.2],
  },
];

export const barChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  xaxis: {
    categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      style: {
        colors: "#A0AEC0",
        fontSize: "12px",
      },
    },
    show: true,
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    color: "#A0AEC0",
    labels: {
      show: true,
      style: {
        colors: "#A0AEC0",
        fontSize: "14px",
      },
    },
  },
  fill: {
    colors: "#ED8936",
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  plotOptions: {
    bar: {
      borderRadius: 15,
      columnWidth: "15px",
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
          },
        },
      },
    },
  ],
};

export const lineChartData = [
  {
    name: "Transmitted",
    data: [5, 4, 30, 22, 50, 25, 40, 23, 50],
  },
  {
    name: "Reflected",
    data: [3, 9, 4, 14, 29, 29, 34, 23, 40],
  },
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: true,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "5",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55",
      "60",
    ],
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#fff",
        fontSize: "12px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#fff", "#3182CE"],
  },
  colors: ["#fff", "#3182CE"],
};
