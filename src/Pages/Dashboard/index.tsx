import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary";
import { TransactionTable } from "../../components/TransactionTable";

import { Content } from './styles';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Content>
        <Summary />
        <TransactionTable />
      </Content>
    </>
  )
}