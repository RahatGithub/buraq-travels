import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home'
import AuthProvider from './contexts/AuthProvider';
import Login from './pages/Login/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
