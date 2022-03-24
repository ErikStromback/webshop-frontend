import "./App.css";
import { NavBar, Header, Footer } from "./components";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
	  <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
	  <Footer />
    </div>
  );
}

export default App;
