import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./containers/ProductsList/ProductsList";
import Layout from "./components/Layout/Layout";
import { Switch, Route, Link } from "react-router-dom";
import ProductDetails from './containers/ProductDetails/ProductDetails';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/products" exact component={ProductsList} />
          <Route path="/products/:id" exact component={ProductDetails}/>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
