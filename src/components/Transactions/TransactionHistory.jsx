import s from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
  return (
    <table className={s.table}>
  <thead >
    <tr className={s.trHead}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={s.tbody}>
      {items.map(item => {
        return (
          <tr key={item.id}>
              <td className={s.type}><div className={s.typeWrapper}>{item.type}</div></td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
          </tr>
        )
      })}
  </tbody>
</table>
  )
}

export default TransactionHistory