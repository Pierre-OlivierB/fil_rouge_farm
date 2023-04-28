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
      data: [4000, 4000, 6000, 3000, 4000, 5000, 7000],
    },
    {
      name: "Debt",
      data: [3000, 4000, 3000, 1000, 2000, 4000, 3000],
    },
  ],
};
const options = {
  //   series: { spline: true },
  //   series: { selectable: true, eventDetectType: "grouped" },
  series: { stack: false, zoomable: true },
  chart: { title: "Variation du budjet", width: 800, height: 400 },
  xAxis: { pointOnColumn: false, title: { text: "Courses" } },
  yAxis: { title: "Poids" },
};
const el = document.getElementById("chart");

const chart = toastui.Chart.columnChart({
  el,
  data: data,
  options,
});
