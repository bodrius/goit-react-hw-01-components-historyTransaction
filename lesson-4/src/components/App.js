import React from "react";
import transactions from "../components/transactions/transactions.json";
import TransactionHistory from "./transactions/Transactions";
const App = () => {
  return <TransactionHistory items={transactions} />;
};

export default App;
