import logo from './logo.svg';
import './App.css';
import Expense from './components/Expenses';


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
        <Expense items={expense}/>
      </header>
    </div>
  ); 
}

export default App;
