import React from 'react'
import css from './transactions.module.css'
const ListTransactions = ({list:{type,amount,currency}}) => {
    return (
        <tr className={css.tr}>
          <td className={css.td}>{type}</td>
          <td className={css.td}>{amount}</td>
          <td className={css.td}>{currency}</td>
        </tr>
    );
}

export default ListTransactions;