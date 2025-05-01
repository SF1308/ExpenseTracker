# Expense Tracker CLI

A simple command-line interface (CLI) tool for tracking expenses.

The idea for this project was inspired by https://roadmap.sh/projects/expense-tracker

## Description

This CLI application allows you to easily add, list, and manage your expenses directly from the terminal. It's built with Node.js and TypeScript, using `commander` for handling CLI commands.

## Features

* Add new expenses with descriptions and amounts.
* List all recorded expenses.
* Delete expenses by ID 


## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/SF1308/ExpenseTracker
    cd ExpenseTracker
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

To use the CLI, you need to compile the TypeScript code and then execute the CLI script.

1.  **Compile TypeScript:**

    ```bash
    npm run build
    ```

2.  **Execute the CLI:**

    ```bash
    npm run cli
    ```

## Commands

Here's how to use the available commands:

* **Add an expense:**

    ```bash
    npm run cli add "<description>" <amount>
    ```

    * `<description>`:  A brief description of the expense (e.g., "Groceries", "Gas").
    * `<amount>`:  The amount of the expense (e.g., 25.50).

    Example:

    ```bash
    npm run cli add "Lunch with colleagues" 18.75
    ```

* **List all expenses:**

    ```bash
    npm run cli list
    ```

* **(Potencialmente) Delete an expense:**

    ```bash
    npm run cli delete <id>
    ```

    * `<id>`:  The unique ID of the expense to delete.

    Example:

    ```bash
    npm run cli delete 12
    ```
