import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home";
import TambahData from "./pages/TambahData";
import ListData from "./pages/ListData";
import Layout from "./component/Layout";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1C0C5B'
    },
    secondary:{
      main: '#22577A'
    },
    error:{
      main: '#3D2C8D'
    },
    text :{
      primary : "#00000",
    },
    background : {
      default: '#1C0C5B'
    },
  },
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>         
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>

            <Switch>
              <Route path="/create">
                <TambahData />
              </Route>
            </Switch>

            <Switch>
              <Route path="/list">
                <ListData />
              </Route>
            </Switch>
         
        </Layout>
      </Router>
    </ThemeProvider>



  );
}

export default App;
