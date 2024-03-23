function generateDataset(startDate, endDate, maxYearlyProfit) {
  let dataset = [];

  const oneDay = 24 * 60 * 60 * 1000;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalDays = Math.round(Math.abs((start - end) / oneDay));
  const maxDailyProfit = maxYearlyProfit / 365;

  let currentDate = new Date(startDate);

  for (let i = 0; i <= totalDays; i++) {
    const dailyProfitLoss = (Math.random() - 0.5) * 2 * maxDailyProfit;

    const formattedDate = currentDate.toISOString().slice(0, 10);

    dataset.push({
      date: formattedDate,
      data: dailyProfitLoss.toFixed(2),
      status: dailyProfitLoss >= 0 ? "Profit" : "Loss",
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dataset;
}

const startDate = "2023-01-01";
const endDate = "2023-12-31";
const maxYearlyProfit = 1650000000;

const generatedDataset = generateDataset(startDate, endDate, maxYearlyProfit);
console.log(generatedDataset);

const tableBody = document.querySelector("#datasetTable tbody");
generatedDataset.forEach((data) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${data.date}</td>
    <td>${data.data}</td>
    <td>${data.status}</td>
  `;
  tableBody.appendChild(row);
});
