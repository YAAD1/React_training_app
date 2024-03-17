import "./App.css";
import Expenses from "./Components/Expense/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 7, 8),
    },
    {
      id: "e2",
      title: "Mobile Phone",
      amount: 69,
      date: new Date(2021, 1, 3),
    },
    {
      id: "e3",
      title: "New Desk",
      amount: 187,
      date: new Date(2021, 8, 8),
    },
    {
      id: "e4",
      title: "Food",
      amount: 49,
      date: new Date(2021, 1, 3),
    },
    {
      id: "e5",
      title: "Udemy Course",
      amount: 9.9,
      date: new Date(2012, 4, 4),
    },
  ];
  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
