import { useState } from 'react';
import './App.css';
import AddExpense from './components/AddExpense/AddExpense';
import ExpensesList from './components/ExpensesList';


function App() {

  const deafult_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const[expensesData,setExpensesData] = useState(deafult_expenses);

  const[selectedYear,setSelectedYear] = useState('1900');

  //const[subsetData,setsubsetData] = useState(expensesData);

  const onSaveexpenseinAppJS = (expenseitem)=>
  {
      // console.log('calling onSaveexpenseinAppJS')

      // console.log(expenseitem);

      var newItem = {id:Math.random().toString(),...expenseitem};

      console.log(newItem);

      setExpensesData(prevState =>
      {
        return [newItem,...prevState]
      });

      //filterbyYear(selectedYear);


     
  }

  const filterbyYear = (year)=>{

    setSelectedYear(year);
    // setsubsetData(prevState =>
    //   {
    //     if(year === "0")
    //     {
    //       return  expensesData;
    //     }
    //     else{
    //     return  expensesData.filter(k => k.date.getFullYear().toString() === year.toString());
    //     }
    //   });
  }


  return (
    <div className="App">
      <div className='expenses'>
        
        <AddExpense onAdd={onSaveexpenseinAppJS}></AddExpense>
        <ExpensesList data={expensesData} onYearChange={filterbyYear} ddlyear={selectedYear} ></ExpensesList>
      </div>
    </div>
  );
}

export default App;
