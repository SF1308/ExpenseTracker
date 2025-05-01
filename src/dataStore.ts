
import * as fs from 'fs'; 
import { Expense } from './types.js';

const DATA_FILE = 'expenses.json';

export const readExpenses = (): Expense[] => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      return []; // Return an empty array if the file doesn't exist
    }
    throw err; // Re-throw other errors
  }
};

export const writeExpenses = (expenses: Expense[]): void => {
  if (!Array.isArray(expenses)) {
    throw new Error('Expenses must be an array');
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(expenses, null, 2), 'utf8');
}