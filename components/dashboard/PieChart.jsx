import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

export default function PieChart({currentMonthExpenses}) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  function totalPricePerCategory(expenses) {
    const result = {};
    for (const [key, value] of Object.entries(expenses)) {
      result[key] = value.reduce((sum, item) => sum + item.price, 0);
    }
    return result;
  }

  function percentagePerCategory(expenses) {
    const result = {};
    const totalPrice = Object.values(expenses).reduce(
      (sum, item) => sum + item
    );
    Object.keys(expenses).map((item) => {
      const percentage = ((expenses[item] / totalPrice) * 100).toFixed(2);
      result[item] = parseFloat(percentage);
    });
    return result;
  }

  function parseToChartData(expense) {
    const {datasets} = chartData;
    const newDatasets = datasets.slice();
    newDatasets[0].data = Object.values(expense);
    newDatasets[0].label = 'Percentage of expenses on each category';
    const result = {
      ...chartData,
      labels: Object.keys(expense),
      datasets: newDatasets,
    };
    return result;
  }

  useEffect(() => {
    if (currentMonthExpenses && Object.keys(currentMonthExpenses).length > 0) {
      const mapResult = totalPricePerCategory(currentMonthExpenses);
      const mapResultPercentage = percentagePerCategory(mapResult);
      setChartData(parseToChartData(mapResultPercentage));
    }
  }, [currentMonthExpenses]);

  return (
    <div className="w-96 xl:w-2/5 2xl:w-1/4 shadow rounded-lg p-5 pt-3 bg-stone-50 dark:bg-slate-900/60">
      <h2 className="font-semibold text-center">
        Percentage of expenses on each category
      </h2>
      <Pie data={chartData} />
    </div>
  );
}
