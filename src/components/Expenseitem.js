import ExpenseDate from "./ExpenseDate"

import './Expenseitem.css'

function Expenseitem(props)
{

    //console.log(props);
    return(
        <div className="expense-item">
            <ExpenseDate date={props.dataitem.date}></ExpenseDate>
            <div className="expense-item__description">
            <h2>{props.dataitem.title}</h2> 
            
            <div className="expense-item__price">${props.dataitem.amount}</div>
            </div>
              
               
              
        </div>
    )
}

export default Expenseitem