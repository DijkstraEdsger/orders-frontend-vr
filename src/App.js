import logo from "./logo.svg";
import "./App.css";
import ProductsList from "./containers/ProductsList/ProductsList";
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <ProductsList />
      </Layout>
    </div>
  );
}

export default App;
