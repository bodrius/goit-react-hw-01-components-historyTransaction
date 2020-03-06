import React from "react";
import ListTransactions from "./ListTransactions";
import transactions from "./transactions.json";
import css from "./transactions.module.css";

const Transactions = props => {
  console.log(props);
  return (
    <>
      <h2 className={css.caption}>Your activiti</h2>
      <table className={css.transaction_history}>
        <thead className={css.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(obj => (
            <ListTransactions list={obj} key={obj.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
};


export default Transactions;
