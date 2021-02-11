import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./containers/ProductsList/ProductsList";
import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";
import ProductDetails from './containers/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/products" exact component={ProductsList} />
          <Route path="/products/:id" exact component={ProductDetails}/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
