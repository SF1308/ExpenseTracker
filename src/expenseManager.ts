import { Expense } from './types.js';

export function addExpense(expenses: Expense[], description: string, amount: number): Expense {
  const id = expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1 : 1;
  const newExpense: Expense = { id, description, amount };
  expenses.push(newExpense);
  return newExpense;
}

export function listExpenses(expenses: Expense[]): void {
  if (expenses.length === 0) {
    console.log('No expenses found.');
    return;
  }
  expenses.forEach(expense => {
    console.log(`${expense.id}: ${expense.description} - $${expense.amount}`);
  });
}

export function deleteExpense(expenses: Expense[], id: number): void {
  const index = expenses.findIndex(expense => expense.id === id);
  if (index === -1) {
    console.log('Expense not found.');
    return;
  }
  expenses.splice(index, 1);
}