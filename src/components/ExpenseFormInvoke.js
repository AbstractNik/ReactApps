import React from 'react';
import './ExpenseForm.css'

const ExpenseFormInvoke = (props) => {

    const invokeForm = () => {
     //   console.log('Clicked');
        props.onClickInvoke();
    }

    return (
      <div className="new-expense__actions_center">
        <button onClick={invokeForm}>Add New Expense</button>
      </div>
    );
    

}

export default ExpenseFormInvoke;