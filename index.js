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
const el_3 = document.getElementById("chart_2");

const chart_3 = toastui.Chart.treemapChart({
  el: el_3,
  data: data_3,
  options: options_3,
});
