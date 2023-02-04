import "./App.css";
import Footer from "./components/footer";
import ProductCounter from "./components/productCounter";
import TopHeader from "./components/topHeader";
import TopProducts from "./components/topProducts";
import HomeView from "./views/HomeView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
      </header>
      <HomeView />
      <TopProducts />
      <ProductCounter />
      <Footer />
    </div>
  );
}

export default App;
