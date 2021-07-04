import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const onTitleChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
    };
    const onAmountChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
    };

    const onDateChangeHandler = (event) => {
        // console.log(event.target.value);
        setEnteredDate(event.target.value);
    };
        
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: parseFloat( enteredAmount),
            date: new Date(enteredDate)
        }

       // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
      setEnteredDate('');
      props.closeForm();
        
  };
  
  const closeTheFormHandler = () => {
    props.closeForm();
  }

    return (
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={onTitleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              onChange={onAmountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={onDateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={closeTheFormHandler}>
            Cancel
          </button>
          <button type="submit" >
            Add Expense
          </button>
        </div>
      </form>
    );

    
}

export default ExpenseForm;