function ExpenseItem(data) {

    return (<div><span>{data.date}</span><h2>{data.title}</h2><span>{data.amount}</span></div>);
}

export default ExpenseItem;