import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //single object to store all attributes
    //const [userInput, setUserInput] = useState({
    //    enteredTitle: '',
    //    enteredAmount: '',
    //    enteredDate: ''
    //});
    const titleChangeHandler = (event) => {
        //setUserInput((prevSate) => {
        //    return {...prevSate, enteredTitle: event.target.value}
        //});
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        //setUserInput((prevSate) => {
        //    return {...prevSate, enteredAmount: event.target.value}
        //});
        setEnteredAmount(event.target.value);

    };

    const dateChangeHandler = (event) => {
        //setUserInput((prevSate) => {
        //    return {...prevSate, enteredDate: event.target.value}
        //});
        setEnteredDate(event.target.value);

    };
    const submitHandler = (event) => {
        // prevent default form submit action
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number'  value={enteredAmount} min="0.01" step="0.01"  onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
};

export default ExpenseForm;