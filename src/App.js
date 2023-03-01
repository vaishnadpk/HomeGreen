import React from "react";
import { Provider } from "react-redux";

import DiscountItems from "./components/discountItems";
import Footer from "./components/footer";
import ProductCounter from "./components/productCounter";
import TopHeader from "./components/topHeader";
import TopProducts from "./components/topProducts";
import store from "./store/store";
import HomeView from "./views/HomeView";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <TopHeader />
        </header>
        <HomeView />
        <TopProducts />
        <DiscountItems />
        <ProductCounter />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
