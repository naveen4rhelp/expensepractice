import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {

    const onYearChange = (event)  =>{
            //console.log(event.target.value);
            console.log('calling Expenselist method from Expense filter')
            props.onFilter(event.target.value);
    }


  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.defaultyear} onChange={onYearChange}>
        <option value='1900'>All</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;