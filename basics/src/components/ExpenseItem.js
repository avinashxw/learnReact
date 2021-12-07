import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (data) => {

    return (<div><ExpenseDate date={data.date} /><h2>{data.title}</h2><span>{data.amount}</span><button onClick={()=>{ console.log('Clicked!'); }}>View Details</button></div>);
}

export default ExpenseItem;