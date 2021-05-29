import React, {useState} from 'react';

import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    // const title = props.title;
    // const amount = props.amount;
    // const date = props.date;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandle = (selectedYear) => {
        // console.log('Expenses.js');
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return(expense.date.getFullYear().toString() === filteredYear);
    });

    // let expensesContent = (<p>No expenses found.</p>);
    // if (filteredExpenses.length > 0)
    // {
    //     expensesContent = filteredExpenses.map
    //                         ((expense) => 
    //                             (<ExpenseItem 
    //                                 key={expense.id}
    //                                 title={expense.title} 
    //                                 amount={expense.amount} 
    //                                 date={expense.date}
    //                             />)
    //                         )
    // }
    // => move ExpensesList.js

    return (
        <div>
            
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandle}
                />

                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
                {/* => move to ExpensesList.js{expensesContent} */}
                
                {/* {filteredExpenses.length === 0 && (<p>No expenses found.</p>)}
                {filteredExpenses > 0 && 
                    filteredExpenses.map
                    ((expense) => 
                        (<ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            amount={expense.amount} 
                            date={expense.date}
                        />)
                    )
                } */}
                {/* && trick in Js => the part after && will be output of the condition*/}

                {/* long condition */}
                {/* {filteredExpenses.length === 0 ? (<p>No expenses found.</p>) : (
                    filteredExpenses.map((expense) => 
                        (<ExpenseItem 
                            key={expense.id}
                            title={expense.title} 
                            amount={expense.amount} 
                            date={expense.date}
                        />
                        ))
                )} */}
                
                {/* <ExpenseItem 
                    title={props.expenses[0].title} 
                    amount={props.expenses[0].amount} 
                    date={props.expenses[0].date}
                />
                <ExpenseItem
                    title={props.expenses[1].title} 
                    amount={props.expenses[1].amount} 
                    date={props.expenses[1].date}
                />
                <ExpenseItem
                    title={props.expenses[2].title} 
                    amount={props.expenses[2].amount} 
                    date={props.expenses[2].date}
                />
                <ExpenseItem
                    title={props.expenses[3].title} 
                    amount={props.expenses[3].amount} 
                    date={props.expenses[3].date}
                /> */}

            {/* <ExpenseItem title={title} amount={amount} date={date}></ExpenseItem> */}
            </Card>
        </div>
        
    );
}

export default Expenses;

