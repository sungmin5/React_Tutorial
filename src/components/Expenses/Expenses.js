import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';


function Expenses(props){
    const [filteredYear, setFilteredYear] = useState('2020');
    const expenses = props.items;

    const filterChangeHandler = (year) => {
        console.log(year);
        setFilteredYear(year);
    }
    return(
        <div>
            
            <Card className="expenses"> 
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
            </Card>
        </div>
    );
}

export default Expenses;