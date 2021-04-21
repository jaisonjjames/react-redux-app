import React, { Suspense, lazy } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "./containers/Header";
//import Products from "./containers/Products";
//import ProductDetails from "./containers/ProductDetails";
import "antd/dist/antd.css";
import './App.css';

const { Header, Footer, Content } = Layout;

const Products = lazy(() => import('./containers/Products'));
const ProductDetails = lazy(() => import('./containers/ProductDetails'));

function App() {
  return (
    <div className="container">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Header>
              <AppHeader />
            </Header>
            <Content>
              <Layout className="site-layout-background" style={{ padding: '50px 0' }}>
                  <Content style={{ padding: '0 50px', minHeight: 280 }}>
                    <Switch>
                      <Route path="/" exact component={Products} />
                      <Route path="/product/:productId" exact component={ProductDetails} />
                      <Route>404 Not found!</Route>
                    </Switch>
                  </Content>
              </Layout>
            </Content>
            <Footer style={{textAlign:'center'}}>All rights reserved, &copy;My Shop</Footer>
          </Layout>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
