export interface TransactionProps{
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export type TransactionInput = Omit<TransactionProps, 'id'>

export interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>
}