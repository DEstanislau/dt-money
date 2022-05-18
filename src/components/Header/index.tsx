import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'

import { NewTransactionModal } from '../NewTransactionModal'


export const Header = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }


  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}> Nova transação </button>
      </Content>

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </Container>
  )
}