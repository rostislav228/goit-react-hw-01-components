import PropTypes from 'prop-types';
import s from './transactionHistory.module.css'

export default function TransactionHistory({items}) {
    return (
        <table className={s.transactionHistory}>
            <thead className={s.thead}>
              <tr>
                <th className={s.th}>Type</th>
                <th className={s.th}>Amount</th>
                <th className={s.th}>Currency</th>
              </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id} className={s.tr}>
                            <td className={s.td}>{item.type}</td>
                            <td className={s.td}>{item.amount}</td>
                            <td className={s.td}>{item.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

TransactionHistory.prototype = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}