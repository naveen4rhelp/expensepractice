import { useState } from 'react'
import  './ExpenseForm.css'

function ExpenseForm(props) {
    
   const [txtTitle,setTxtTitle] =  useState('');
   const [txtAmount,settxtAmount] =  useState('');
   const [txtDate,setTxtDate] =  useState('');

   const [hideControls,setHideControls] = useState(true)


//    const [input,setInput] = useState({
//     txtTitle : '',
//     txtAmount : '',
//     txtDate : '',
//    })


   const onTitleChnage = (event) =>
    {
            setTxtTitle(event.target.value);
    }

    const onAmountChnage = (event) =>
    {
        settxtAmount(event.target.value);
    }

    const onDateChnage = (event) =>
    {


        setTxtDate(event.target.value);
    }

    const SaveExpense = (event)=>
    {
        event.preventDefault();

        const expensedata ={
            title : txtTitle,
            amount : txtAmount,
            date : new Date(txtDate)
        }

        console.log('submitted in ExpenseForm');
        console.log(expensedata);

       // console.log('callig  SendDataToAppJs in ExpenseForm');

        props.onSaveExpense(expensedata);
        setTxtTitle('');
        settxtAmount('');
        setTxtDate('');



    }

    const toggleControls = () =>{
            setHideControls(prevState =>{
                return !prevState;
            })
    }


    return (
        <form onSubmit={SaveExpense}>
          {/* {!hideControls &&   <div className="new-expense__controls">
                <div className="new-expense__control" >
                    <label>
                        Title
                    </label>
                    <input type="text" onChange={onTitleChnage} value={txtTitle} ></input>
                </div>
                <div className="new-expense__control">
                    <label>
                        Amount
                    </label>
                    <input type="number" min="0.01" step="0.01" value={txtAmount} onChange={onAmountChnage} ></input>
                </div>
                <div className="new-expense__control">
                    <label>
                        Date
                    </label>
                    <input type="Date" min="2019-01-01" max="2022-12-01" value={txtDate} onChange={onDateChnage}></input>
                </div>
            </div>}
            <div className='new-expense__actions'>
              <button onClick={toggleControls}>{hideControls?"Add Expense": "Cancel"}</button>
              {!hideControls && <button type="submit">Add Expense</button>}  
               
            </div> */}

<div className="new-expense__controls">
<div className="new-expense__control" >
                    <label>
                        Title
                    </label>
                    <input type="text" onChange={onTitleChnage} value={txtTitle} ></input>
                </div>
                <div className="new-expense__control">
                    <label>
                        Amount
                    </label>
                    <input type="number" min="0.01" step="0.01" value={txtAmount} onChange={onAmountChnage} ></input>
                </div>
                <div className="new-expense__control">
                    <label>
                        Date
                    </label>
                    <input type="Date" min="2019-01-01" max="2022-12-01" value={txtDate} onChange={onDateChnage}></input>
                </div>
            </div>

            <div className='new-expense__actions'>
              <button onClick={props.onCancel}>Cancel</button>
              <button type="submit">Add Expense</button>
               
            </div>
            
        </form>
    )
}

export default ExpenseForm