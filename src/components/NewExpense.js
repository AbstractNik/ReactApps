import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import ExpenseFormInvoke from './ExpenseFormInvoke';

const NewExpense = (props) => {
  const [invokeForm, setInvokeForm] = useState(false);

  

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          id: Math.random().toString(),
          ...enteredExpenseData
        };
      //  console.log(expenseData);
        props.onFetchExpense(expenseData);
  }
  
  const onClickFormInvoke = () => {
  //  console.log('Via Click!!');
    setInvokeForm(true);
    
  };

  const OnCloseFormHandler = () => {
    setInvokeForm(false);
  }

  return (
    <div className="new-expense">
      {invokeForm === false ? (
        <ExpenseFormInvoke onClickInvoke={onClickFormInvoke} />
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          closeForm={OnCloseFormHandler}
        ></ExpenseForm>
      )}
    </div>
  );
    
}

export default NewExpense;
//<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>;