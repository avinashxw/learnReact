import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Let's get started!</h1>
      <ExpenseItem></ExpenseItem>
      </header>
    </div>
  ); 
}

export default App;
