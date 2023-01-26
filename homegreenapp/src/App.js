import "./App.css";
import ProductCounter from "./components/ProductCounter";
import TopHeader from "./components/topHeader";
import TopProducts from "./components/TopProducts";
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
    </div>
  );
}

export default App;
