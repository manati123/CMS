import { CssBaseline } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "../store/store";
import CustomThemeProvider from "./CustomThemeProvider";
import Routes from "./Routes/Routes";

const App = () => {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <CssBaseline />
        <Routes />
      </CustomThemeProvider>
    </Provider>
  );
};

export default App;
