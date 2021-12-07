
import ExpenseItem from './ExpenseItem';

const Expenses = (data) => {

    return (
        <div>
            <ExpenseItem 
      title={data.items[0].title} 
      amount={data.items[0].amount} 
      date={data.items[0].date}        
      ></ExpenseItem>
      <ExpenseItem 
      title={data.items[1].title} 
      amount={data.items[1].amount} 
      date={data.items[1].date}        
      ></ExpenseItem>
      <ExpenseItem 
      title={data.items[2].title} 
      amount={data.items[2].amount} 
      date={data.items[2].date}        
      ></ExpenseItem>
      <ExpenseItem 
      title={data.items[3].title} 
      amount={data.items[3].amount} 
      date={data.items[3].date}        
      ></ExpenseItem>
        </div>
    );
}

export default Expenses;