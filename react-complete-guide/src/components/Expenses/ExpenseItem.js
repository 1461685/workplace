// import React, {useState} from 'react';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import './ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseItem = (props) =>
{
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;\

    // const [title, setTitle] = useState(props.title);
    // console.log('ExpenseItem evaluated by React');
    
    // const clickHandler = () =>
    // {
    //     // console.log('Clicked!')
    //     setTitle('Update!');
    //     console.log(title);
    // };

    return (
        <li>
            <Card className="expense-item">
                {/* <div>March 28th 2021</div>
                <div className="expense-item__description">
                    <h2>Car Insurance</h2>
                    <div className="expense-item__price">$294.67</div>
                </div> */}

                {/* <div>{expenseDate.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div> */}

                {/* <div>{props.date.toISOString()}</div> */}
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    {/* <h2>{title}</h2> */}
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
        </li>
    );
}

export default ExpenseItem;