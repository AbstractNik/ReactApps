import React,{ useState }  from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {

 //const [title, setTitle]= useState(props.title);

 // let title = props.title;
  // const clickHandler = () => {
  // //  title = 'Updated'
  //   setTitle('Updated!!');
  //   console.log(title);
  // }
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
  //  console.log(Date.parse(props.expenseDate));
//   let parts = props.expenseDate.split("-");
//   // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
//   // January - 0, February - 1, etc.
//   let mydate = new Date(parts[0], parts[1] - 1, parts[2]);
//   const month = mydate.toLocaleString('en-US', { month: 'long' });
//   const day = mydate.toLocaleString("en-US", { day: "2-digit" });
//   const year = mydate.getFullYear();

  return (
    <Card className="expense-item">
      <ExpenseDate dateString={props.expenseDate}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price">{"GBP " + props.amount}</div>
      </div>
     
    </Card>
  );
}
// <button onClick={clickHandler}>Change Title</button>
export default ExpenseItem;