import React from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyles, theme } from './common/styles/global';
import { StyledAppContainer } from './common/styles/styledAppContainer';
import {Search} from "./components/Search/Search";

function App() {

    const onSearchChangeHandle = () => {

    }

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <StyledAppContainer>
            <h1>Check the weather in your city</h1>
            <Search onSearchChange={onSearchChangeHandle}/>
        </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
