import { useState } from 'react';
import ExpensesFilter from './ExpenseFilter'
import Expenseitem from './Expenseitem'

import './ExpensesList.css'

function ExpensesList(props) {
    const [filterYear, setFilterYear] = useState('2020');

    const onGetDataFromExpensesFilter = (year) => {
        setFilterYear(year);
        // console.log('called from Expense filter')
        // console.log(filterYear);
        props.onYearChange(year);
    }

    const visibleItem = (item) => {
        if (props.ddlyear === '1900') {
            return <Expenseitem key={item.id} dataitem={item}></Expenseitem>
        }
        else {
            if (item.date.getFullYear().toString() === props.ddlyear.toString()) {
                return <Expenseitem key={item.id} dataitem={item}></Expenseitem>
            }
            else {
                return <h4>No expensens avaible for year {props.ddlyear}</h4>;
            }
        }
    }

    const filtereddata = props.data.filter((item) => {
        return (filterYear === '1900') || (item.date.getFullYear().toString() === filterYear);
    })

    return (
        <div>
            


            <ExpensesFilter onFilter={onGetDataFromExpensesFilter} defaultyear={filterYear}></ExpensesFilter>


            {filtereddata.length === 0 && <h4 className='noexpense'>No expenses avaible for year {filterYear}</h4>}

            {filtereddata.length > 0 && filtereddata.map((item) => (<Expenseitem key={item.id} dataitem={item}></Expenseitem>))}

        </div>
    )
}

export default ExpensesList