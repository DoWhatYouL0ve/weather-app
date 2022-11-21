import React from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyles, theme } from './components/commonStyles/global';
import { StyledAppContainer } from './components/commonStyles/styledAppContainer';
import {Search} from "./components/Search/Search";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <StyledAppContainer>
            <Search/>
        </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
