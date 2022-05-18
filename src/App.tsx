import { Routes } from './routes'
import { GlobalStyle } from "./styles/global";
import { AppContext } from './context'

export const App = () => {
  return (
    <>
      <AppContext>
        <Routes />
      </AppContext>
      <GlobalStyle />
    </>
  );
}

