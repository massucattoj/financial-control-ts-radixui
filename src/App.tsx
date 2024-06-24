import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStype } from "./styles/globa";
import { Transactions } from "./pages/Transactions";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStype />
      
      <Transactions />

    </ThemeProvider>
  )
}

