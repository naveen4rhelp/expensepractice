import ExpenseForm from "./ExpenseForm";

import './AddExpense.css'
import { useState } from "react";

function AddExpense(props) {

    const SendDataToAppJs = (expenseitem) => {
        console.log('called from expense form js');
        console.log(expenseitem);
        props.onAdd(expenseitem);
        toggleControls();

    }

    const [hideControls,setHideControls] = useState(true)

    const toggleControls = () =>{
        setHideControls(prevState =>{
            return !prevState;
        })
}



    return (
        <div className="new-expense">

            {hideControls && <button onClick={toggleControls}>Add Expense</button> }
            {!hideControls &&   <ExpenseForm onSaveExpense={SendDataToAppJs} onCancel={toggleControls} ></ExpenseForm>}
        </div>
    )

}

export default AddExpense