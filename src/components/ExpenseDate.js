import './ExpenseDate.css';

function ExpenseDate(props) {

     let parts = props.dateString.split("-");
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  let mydate = new Date(parts[0], parts[1] - 1, parts[2]);
  const month = mydate.toLocaleString('en-US', { month: 'long' });
  const day = mydate.toLocaleString("en-US", { day: "2-digit" });
  const year = mydate.getFullYear();


    return (
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    );
    
}

export default ExpenseDate;