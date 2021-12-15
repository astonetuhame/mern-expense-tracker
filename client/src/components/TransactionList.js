import { GlobalContext } from "../context/GlobalState"
import { useContext, useEffect } from "react"
import Transaction from "./Transaction"


const TransactionList = () => {

    const { transactions, getTransactions } = useContext(GlobalContext)

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction, index) =>
                    (<Transaction key={index} transaction={transaction} />)
                )}
            </ul>
        </>
    )
}

export default TransactionList
