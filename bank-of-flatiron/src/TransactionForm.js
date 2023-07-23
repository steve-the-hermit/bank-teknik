// src/components/TransactionForm.js
import React, { useState } from "react";
import axios from "axios";

const TransactionForm = ({ updateTransactions }) => {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post new transaction to the backend
    axios
      .post("http://localhost:8001/transactions", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Update the transactions after successful post
        updateTransactions();
        // Clear the form fields
        setFormData({
          date: "",
          description: "",
          category: "",
          amount: "",
        });
      })
      .catch((error) => {
        console.error("Error posting transaction:", error);
      });
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
