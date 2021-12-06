import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {

  var expense = [
    {
      title: 'HMB Brown Bread',
      amount: 'INR 40',
      date: '10th Dec, 2021'
    },
    {
      title: 'Amul Butter',
      amount: 'INR 252',
      date: '10th Mar, 2022'
    },
    {
      title: 'Fruit Jam',
      amount: 'INR 220',
      date: '10th Jan, 2022'
    },
    {
      title: 'Egg Tray',
      amount: 'INR 160',
      date: '10th Dec, 2022'
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's get started!</h1>
      <ExpenseItem 
      title={expense[0].title} 
      amount={expense[0].amount} 
      date={expense[0].date}        
      ></ExpenseItem>
      <ExpenseItem 
      title={expense[1].title} 
      amount={expense[1].amount} 
      date={expense[1].date}        
      ></ExpenseItem>
      <ExpenseItem 
      title={expense[2].title} 
      amount={expense[2].amount} 
      date={expense[2].date}        
      ></ExpenseItem>
      <ExpenseItem 
      title={expense[3].title} 
      amount={expense[3].amount} 
      date={expense[3].date}        
      ></ExpenseItem>
      </header>
    </div>
  ); 
}

export default App;
