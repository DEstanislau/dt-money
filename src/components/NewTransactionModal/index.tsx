import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { NewTransactionsModalProps } from './interfaces'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Form, RadioBox } from './styles'
import { useTransactions } from '../../context/useTransactions'

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionsModalProps) => {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  const resetFields = () => {
    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
  }

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()
    await createTransaction({
      title,
      amount,
      category,
      type,
      createdAt: new Date()
    })

    onRequestClose()
    resetFields()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >

      <button type='button' className='react-modal-close' onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input 
         type="text"
         placeholder='Título'
         value={title}
         onChange={event => setTitle(event.target.value)}
         />
        <input 
        type="number" 
        placeholder='Valor'
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
        />

        <div className="transaction-type-container">
          <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </div>

        <input 
        type="text" 
        placeholder='Categoria'
        value={category}
        onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Form>
    </Modal>
  )
}