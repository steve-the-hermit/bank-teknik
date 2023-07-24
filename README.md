
# Bank of Flatiron

Welcome to Bank of Flatiron, a React application that allows you to view and manage your recent bank transactions.


## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the App](#running-the-app)
- [Endpoints](#endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Bank of Flatiron is a React application that allows users to view and manage their recent bank transactions. The app provides a user-friendly interface for adding new transactions, searching for specific transactions, and filtering transactions based on description.

## Features

- View a table of recent bank transactions.
- Add new transactions with date, description, category, and amount.
- Search for specific transactions by description.
- Filter transactions based on the search term.
- Sort transactions alphabetically by category or description (Advanced Deliverable).


## Prerequisites

Before running the app, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Getting Started

### Installing Dependencies

To install the project dependencies, run the following command in the project root directory:

```bash
npm install
```

### Running the App

To start the development server and run the app, use the following command:

```bash
npm start
```

This will launch the app in your default web browser at `http://localhost:3000`.

## Endpoints

The app interacts with a local JSON server to fetch and persist data. The endpoints used are:

- `GET /transactions`: Fetch all transactions.
- `POST /transactions`: Add a new transaction.

## Usage

1. **View Transactions**: Upon running the app, you'll see a table displaying your recent bank transactions.

2. **Add Transaction**: Click on the "Add Transaction" section, and you'll be able to fill out a form to add a new transaction. The date can be selected from the calendar dropdown.

3. **Search Transactions**: Use the search bar to search for specific transactions by description. The table will automatically update with the matching results.

4. **Filter Transactions**: Clear the search bar to see all transactions again.

_(Include any other specific usage instructions or tips relevant to your app.)_

## Contributing

Contributions are welcome! If you'd like to make any improvements or fix issues, please follow these steps:

1. Fork the repo.
2. Create a new branch with a descriptive name (`git checkout -b feature/your-feature`).
3. Make your changes and test thoroughly.
4. Commit your changes (`git commit -m "Add your commit message"`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

<!-- thank you!! -->