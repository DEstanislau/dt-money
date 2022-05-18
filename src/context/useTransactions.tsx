import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';
import { ChildrenProps } from './interfaces/Defaultinterfaces'
import { TransactionInput, TransactionProps, TransactionsContextData } from './interfaces/IUseTransactions'

const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData);

const TransactionProvider = ({ children }: ChildrenProps) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const getTransactions = async () => {
    const response = await api.get('transactions')
    const { transactions } = response.data
    setTransactions(transactions)
  }

  const createTransaction = async (transactionParam: TransactionInput) => {
    const response = await api.post('transaction', transactionParam)
    const { transaction } = response.data
    setTransactions(transactions => [...transactions, transaction])
    console.log(response)
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return(
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

const useTransactions = () => {
  const context = useContext(TransactionContext);

  if(!context){
    throw new Error('useTransactions must be used within a AppProvider')
  }

  return context;
}

export { TransactionProvider, useTransactions }

