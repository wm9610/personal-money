import React, {useEffect, useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';

export default function BarChart({currentMonthExpenses}) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: '',
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(129, 140, 248, 1)',
          'rgba(132, 204, 22, 1)',
          'rgba(232, 121, 249, 1)',
          'rgba(6, 128, 212, 1)',
        ],
      },
    ],
  });

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  function totalPricePerCategory(expenses) {
    const result = {};
    for (const [key, value] of Object.entries(expenses)) {
      result[key] = value.reduce((sum, item) => sum + item.price, 0);
    }
    return result;
  }

  function parseToChartData(expense) {
    const {datasets} = chartData;
    const newDatasets = datasets.slice();
    newDatasets[0].data = Object.values(expense);
    // newDatasets[0].label = 'Percentage of expenses on each category';
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
      setChartData(parseToChartData(mapResult));
    }
  }, [currentMonthExpenses]);

  return (
    <div className="w-96 xl:w-2/5 2xl:w-1/3 mb-auto shadow rounded-lg p-5 pt-3 bg-stone-50 dark:bg-slate-900/60">
      <h2 className="font-semibold text-center">
        Total amount of expenses on each category
      </h2>
      <Bar options={options} data={chartData} />
    </div>
  );
}
