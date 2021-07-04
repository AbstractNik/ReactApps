import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Anaisha Toys",
    amount: 36.,
    date: new Date(2021, 7, 14),
  },
  { id: "e2", title: "Lebara Recharge", amount: 15, date: new Date(2021, 2, 31) },
  {
    id: "e3",
    title: "TFL Expense",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "Beer Expense",
    amount: 53.14,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenseArr, setExpenseArr] = useState(expenses);
  const onAddExpenseHandler = (expenseEntry) => {
    console.log(expenseEntry); //here we are printing the added expense object
    setExpenseArr((prevExpenses) => {
      return [expenseEntry, ...prevExpenses];
    }); //added the expense object to the expenses array
  };
  return (
    <div>
      <NewExpense onFetchExpense={onAddExpenseHandler}></NewExpense>
      <Expenses expenses={expenseArr}></Expenses>
    </div>
  );
};

export default App;
