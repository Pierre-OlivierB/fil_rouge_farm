const data = {
  categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  series: [
    {
      name: "Budget",
      data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
    },
    {
      name: "Income",
      data: [8000, 4000, 7000, 2000, 6000, 3000, 5000],
    },
    {
      name: "Expenses",
      data: [-4000, -4000, -6000, -3000, -4000, -5000, -7000],
    },
    {
      name: "Debt",
      data: [-3000, -4000, -3000, -1000, -2000, -4000, -3000],
    },
  ],
};
const options = {
  //   series: { spline: true },
  //   series: { selectable: true, eventDetectType: "grouped" },
  series: {
    stack: true,
    zoomable: true,
    selectable: true,
    eventDetectType: "grouped",
    dataLabels: { visible: true },
  },
  chart: { title: "Variation du budjet", width: 800, height: 400 },
  xAxis: { pointOnColumn: false, title: { text: "Month" } },
  yAxis: { title: "$" },
};
const el = document.getElementById("chart");

const chart = toastui.Chart.columnChart({
  el,
  data: data,
  options,
});
// !---------------------------------------------------
const data_2 = {
  categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  series: [
    {
      name: "Budget",
      data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
    },
    {
      name: "Income",
      data: [8000, 4000, 7000, 2000, 6000, 3000, 5000],
    },
    {
      name: "Expenses",
      data: [4000, 4000, 6000, 3000, 4000, 5000, 7000],
    },
    {
      name: "Debt",
      data: [3000, 4000, 3000, 1000, 2000, 4000, 3000],
    },
  ],
};
const options_2 = {
  //   series: { spline: true },
  //   series: { selectable: true, eventDetectType: "grouped" },
  series: {
    stack: true,
    zoomable: true,
    selectable: true,
    eventDetectType: "grouped",
    dataLabels: { visible: false },
  },
  chart: { title: "Variation du budjet", width: 800, height: 400 },
  xAxis: { pointOnColumn: false, title: { text: "Month" } },
  yAxis: { title: "$" },
};
const el_2 = document.getElementById("chart_2");

const chart_2 = toastui.Chart.radialBarChart({
  el: el_2,
  data: data_2,
  options: options_2,
});
// !---------------------------------------------------
const data_3 = {
  series: [
    {
      label: "Documents",
      children: [
        {
          label: "docs",
          children: [
            {
              label: "pages",
              data: 1.3,
            },
            {
              label: "keynote",
              data: 2.5,
            },
            {
              label: "numbers",
              data: 1.2,
            },
          ],
        },
        {
          label: "photos",
          data: 5.5,
        },
        {
          label: "videos",
          data: 20.7,
        },
      ],
    },
    {
      label: "Downloads",
      children: [
        {
          label: "recents",
          data: 5.3,
        },
        {
          label: "2020",
          data: 10.1,
        },
        {
          label: "2019",
          data: 8.2,
        },
      ],
    },
    {
      label: "Application",
      data: 16.4,
    },
    {
      label: "Desktop",
      data: 4.5,
    },
  ],
};
const options_3 = {
  //   series: { spline: true },
  //   series: { selectable: true, eventDetectType: "grouped" },
  series: {
    stack: true,
    zoomable: true,
    selectable: true,
    eventDetectType: "grouped",
    dataLabels: { visible: false },
  },
  chart: { title: "Variation du budjet", width: 800, height: 400 },
  xAxis: { pointOnColumn: false, title: { text: "Month" } },
  yAxis: { title: "$" },
};
const el_3 = document.getElementById("chart_3");

const chart_3 = toastui.Chart.treemapChart({
  el: el_3,
  data: data_3,
  options: options_3,
});
// !---------------------------------------------------
const data_4 = {
  categories: ["Browser"],
  series: [
    {
      name: "Chrome",
      data: 46.02,
    },
    {
      name: "IE",
      data: 20.47,
    },
    {
      name: "Firefox",
      data: 17.71,
    },
    {
      name: "Safari",
      data: 5.45,
    },
    {
      name: "Opera",
      data: 3.1,
    },
    {
      name: "Etc",
      data: 7.25,
    },
  ],
};
const options_4 = {
  //   series: { spline: true },
  //   series: { selectable: true, eventDetectType: "grouped" },
  series: {
    stack: true,
    zoomable: true,
    selectable: true,
    eventDetectType: "grouped",
    dataLabels: { visible: false },
  },
  chart: { title: "Variation du budjet", width: 800, height: 400 },
  xAxis: { pointOnColumn: false, title: { text: "Month" } },
  yAxis: { title: "$" },
};
const el_4 = document.getElementById("chart_4");

const chart_4 = toastui.Chart.pieChart({
  el: el_4,
  data: data_4,
  options: options_4,
});

// !---------------------------------------------------
const data_5 = {
  categories: [
    "2020.01",
    "2020.02",
    "2020.03",
    "2020.04",
    "2020.05",
    "2020.06",
    "2020.07",
    "2020.08",
    "2020.09",
    "2020.10",
    "2020.11",
    "2014.12",
  ],
  series: {
    area: [
      {
        name: "Effective Load",
        data: [150, 130, 100, 125, 128, 44, 66, 162, 77, 70, 68, 103],
      },
    ],
    line: [
      {
        name: "Power Usage",
        data: [72, 80, 110, 117, 129, 137, 134, 66, 121, 88, 114, 117],
      },
    ],
  },
};
const options_5 = {
  //   series: { spline: true },
  //   series: { selectable: true, eventDetectType: "grouped" },
  series: {
    stack: true,
    zoomable: true,
    selectable: true,
    eventDetectType: "grouped",
    dataLabels: { visible: false },
  },
  chart: { title: "Variation du budjet", width: 800, height: 400 },
  xAxis: { pointOnColumn: false, title: { text: "Month" } },
  yAxis: { title: "$" },
};
const el_5 = document.getElementById("chart_5");

const chart_5 = toastui.Chart.lineAreaChart({
  el: el_5,
  data: data_5,
  options: options_5,
});
