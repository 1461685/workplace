import React, {useState} from 'react';

import './ExpenseForm.css';


const ExpenseForm = (props) => {
    // use multiple state
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //One state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) =>
    {
        // console.log(event.target.value);
        //multiple state
        setEnteredTitle(event.target.value);

        // if the state depend on the previous state => do not do this.
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // setUserInput((prevState) => {
        //     return({...prevState, enteredTitle: event.target.value});
        // });
    };

    const amountChangeHandle = (event) => {
        //multiple state
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })

        // setUserInput((prevState) => {
        //     return({...prevState, enteredAmount: event.target.value});
        // });
    } ;

    const dateChangeHandler = (event) => {
        //multiple state
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    const submitHandle = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandle}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        type='text' 
                        value= {enteredTitle}
                        onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min="0.01" 
                        step="0.01" 
                        value={enteredAmount}
                        onChange={amountChangeHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                        type='date' 
                        min="2019-01-01" 
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;