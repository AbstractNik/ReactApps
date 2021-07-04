import React,{useState} from 'react';
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  console.log("Expenses Array");
  console.log(props.expenses);

  const [expenseFilter, setExpenseFilter] = useState("2020");
  // const [expenseArr, setExpenseArr] = useState(props.expenses);

  const filteredArray = props.expenses.filter((expe) => {

    return expe.date.toISOString().substring(0, 10).split("-")[0] === expenseFilter;
    
    
  });

  const fetchSelectedDdValueHandler = (dropDownValue) => {
    console.log(dropDownValue);
    setExpenseFilter(dropDownValue);
  };



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={expenseFilter}
          onChangeDropDown={fetchSelectedDdValueHandler}
        />
        <ExpenseChart filteredExpArr={filteredArray} />

        {filteredArray.length === 0 ? (
          <p className="expenses-list__fallback">No Expense Found </p>
        ) : (
          filteredArray.map((exp) => {
            {
              return (
                <ExpenseItem
                  key={exp.id}
                  title={exp.title}
                  amount={exp.amount}
                  expenseDate={exp.date.toISOString().substring(0, 10)}
                />
              );
            }
          })
        )}
      </Card>
    </div>
  );
}

export default Expenses;

//  // <h1>{expenseFilter}</h1>

// if (
//             exp.date.toISOString().substring(0, 10).split("-")[0] ===expenseFilter
//           )
//// console.log(
          //   "Date year ---->" + exp.date.toISOString().substring(0, 10).split("-")[0]
          // );
// <ExpenseItem
//           title={props.expenses[0].title}
//           amount={props.expenses[0].amount}
//           expenseDate={props.expenses[0].date.toISOString().substring(0, 10)}
//         ></ExpenseItem>
//         <ExpenseItem
//           title={props.expenses[1].title}
//           amount={props.expenses[1].amount}
//           expenseDate={props.expenses[1].date.toISOString().substring(0, 10)}
//         ></ExpenseItem>
//         <ExpenseItem
//           title={props.expenses[2].title}
//           amount={props.expenses[2].amount}
//           expenseDate={props.expenses[2].date.toISOString().substring(0, 10)}
//         ></ExpenseItem>
//         <ExpenseItem
//           title={props.expenses[3].title}
//           amount={props.expenses[3].amount}
//           expenseDate={props.expenses[3].date.toISOString().substring(0, 10)}
//         ></ExpenseItem>