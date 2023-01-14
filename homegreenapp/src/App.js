import "./App.css";
import ProductCounter from "./components/ProductCounter";
import TopHeader from "./components/topHeader";
import TopProducts from "./components/TopProducts";
import HomeView from "./views/HomeView";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopHeader />
      </header>
      <HomeView />
      <TopProducts />
      <ProductCounter />
      <Counter />
    </div>
  );
}

export default App;
