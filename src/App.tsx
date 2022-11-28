import React from 'react';
import {ThemeProvider} from "styled-components";
import {GlobalStyles, theme } from './common/styles/global';
import { StyledAppContainer } from './common/styles/styledAppContainer';
import {Search} from "./components/Search/Search";
import {CurrentWeather} from "./components/CurrentWeather/CurrentWeather";
import {ErrorHandler} from "./common/ErrorHandler/ErrorHandler";
import {useAppSelector} from "./appState/hooks/appHooks";

function App() {
    const error = useAppSelector(store => store.app.error)
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <StyledAppContainer>
            <h1>Check the weather in your city</h1>
            <Search/>
            <CurrentWeather/>
            {error && <ErrorHandler/>}
        </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
