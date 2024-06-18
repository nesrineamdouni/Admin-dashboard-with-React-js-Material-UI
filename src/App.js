import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/products" exact element={<Products />}></Route>
          <Route path="/analytics" exact element={<Analytics />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
