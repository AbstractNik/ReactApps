import React from 'react';

import Chart from './Chart';

const ExpenseChart = (props) => {

    const chartDatePoints = [
      { label: "Jan", value: 0 },
      { label: "Feb", value: 0 },
      { label: "Mar", value: 0 },
      { label: "Apr", value: 0 },
      { label: "May", value: 0 },
      { label: "Jun", value: 0 },
      { label: "Jul", value: 0 },
      { label: "Aug", value: 0 },
      { label: "Sep", value: 0 },
      { label: "Oct", value: 0 },
      { label: "Nov", value: 0 },
      { label: "Dec", value: 0 },
    ];

    for (const exp of props.filteredExpArr) {
        const expenseMonth = exp.date.getMonth();

      //console.log ('Expense Month'+expenseMonth)
        chartDatePoints[expenseMonth].value+=exp.amount;
    }

   // console.log(chartDatePoints);

    
    return (
        <Chart datapoints={chartDatePoints} />
    );
};

export default ExpenseChart;