import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllCountry from './Components/AllCountry/AllCountry';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleCountry from './SingleCountry';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route exact path="/">
            <AllCountry></AllCountry>
          </Route>
          <Route  path="/edit/:_id">
            <SingleCountry></SingleCountry>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
