import { Command } from 'commander';
import { addExpense, listExpenses, deleteExpense } from './expenseManager.js';
import { readExpenses, writeExpenses } from './dataStore.js'; 

const program = new Command();

program
  .name('expense-tracker')
  .version('1.0.0')
  .description('A CLI tool for tracking expenses.');

program
  .command('add')
  .description('Add a new expense')
  .argument('<description>', 'Description of the expense')
  .argument('<amount>', 'Amount of the expense')
  .action((description, amount) => {
    const expenses = readExpenses();
    const newExpense = addExpense(expenses, description, parseFloat(amount));
    writeExpenses(expenses);
    console.log('Expense added:', newExpense);
  });

program
  .command('list')
  .description('List all expenses')
  .action(() => {
    const expenses = readExpenses();
    listExpenses(expenses);
  });

program
  .command('delete')
  .description('Delete an expense')
  .argument('<id>', 'ID of the expense to delete')
  .action((id) => {
    const expenses = readExpenses();
    deleteExpense(expenses, parseInt(id));
    writeExpenses(expenses);
    console.log('Expense deleted');
  });

program.parse();