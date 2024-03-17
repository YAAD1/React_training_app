import "./ExpenseForm.css";
import Card from "../UI/Card";

function ExpenseForm() {
  return (
    <Card>
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="new-expense__control label">Title</label>
          <input className="new-expense__control input" type="text"></input>
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Amount</label>
          <input className="new-expense__control input" type="number" min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control">
          <label className="new-expense__control label">Date</label>
          <input className="new-expense__control input" type="date" min="2019-01-01" max="2050-01-01"></input>
        </div>
        
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
    </Card>
  );
}
export default ExpenseForm;
