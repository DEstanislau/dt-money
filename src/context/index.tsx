import { TransactionProvider } from './useTransactions'
import { ChildrenProps } from './interfaces/Defaultinterfaces'


export const AppContext = ({ children }: ChildrenProps) => {
  return(
  <TransactionProvider>
    {children}
  </TransactionProvider>
  )
}

