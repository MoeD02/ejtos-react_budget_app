import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch,budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        })
    }
    const handleCurrencyChange = (event) => {
       //CHG_CURRENCY
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        })
        
    };
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
<br/>
 <select value={currency} onChange={handleCurrencyChange}style={{ backgroundColor: '#d4edda' }}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>

</div>
    );
};
export default Budget;
