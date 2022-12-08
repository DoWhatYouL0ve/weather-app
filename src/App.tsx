import {ThemeProvider} from "styled-components";
import {GlobalStyles, theme } from './styles/GlobalStyles';
import { StyledAppContainer } from './styles/commonStyles';
import {Search} from "./components/Search/Search";
import {CurrentWeather} from "./components/CurrentWeather/CurrentWeather";
import {ErrorHandler} from "./components/common/Error/ErrorHandler";
import {useAppSelector} from "./hooks/appHooks";

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
