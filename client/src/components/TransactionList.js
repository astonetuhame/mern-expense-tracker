import { GlobalContext } from "../context/GlobalState"
import { useContext } from "react"
import Transaction from "./Transaction"


const TransactionList = () => {

    const { transactions } = useContext(GlobalContext)


    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction, index) =>
                ( <Transaction key={index} transaction={transaction}/> )
                )}
            </ul>
        </>
    )
}

export default TransactionList
