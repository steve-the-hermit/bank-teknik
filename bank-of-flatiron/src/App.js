// src/App.js
import React, { useEffect, useState } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";
import SearchBar from "./SearchBar";
import axios from "axios";


const App = () => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch transactions from the backend
    updateTransactions();
  }, []);

  const updateTransactions = () => {
    axios.get("http://localhost:8001/transactions").then((response) => {
      setTransactions(response.data);
    });
  };

  const handleSearch = (searchTerm) => {
    // Filter transactions based on the search term (case-insensitive)
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // If the search term is empty, show all transactions
    setFilteredTransactions(searchTerm === "" ? transactions : filteredTransactions);
  };
  

  return (
    <div>
      <h1>Welcome to the Bank of Flatiron</h1>
      <TransactionForm updateTransactions={updateTransactions} />
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
