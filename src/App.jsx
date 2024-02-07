import React from "react";

import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import MensPage from "./components/Pages/MensPage/MensPage";
import WomensPage from "./components/Pages/WomensPage/WomensLandingPage/WomensPage";
import Juniors from "./components/Pages/JuniorsPage/JuniorsLandingPage/Juniors";
import ProfilePage from "./components/Pages/ProfilePage/ProfilePage";
import WishlistPage from "./components/Pages/WishlistPage/WishlistPage";
import CartPage from "./components/Pages/CartPage/CartPage";
import MensJackets from "./components/Pages/MensPage/MensTopwear/Mens_Jackets/MensJackets";
import MensShirts from "./components/Pages/MensPage/MensTopwear/Mens_Shirts/MensShirts";
import MensSweatshirts from "./components/Pages/MensPage/MensTopwear/Mens_Sweatshirts/MensSweatshirts";
import MensTshirt from "./components/Pages/MensPage/MensTopwear/Mens_Tshirts/MensTshirts";
import MensCargos from "./components/Pages/MensPage/MensBottomwear/Mens_Cargos/MensCargos";
import MensJeans from "./components/Pages/MensPage/MensBottomwear/Mens_Jeans/MensJeans";
import MensShorts from "./components/Pages/MensPage/MensBottomwear/Mens_Shorts/MensShorts";
import MensTrackpants from "./components/Pages/MensPage/MensBottomwear/Mens_Trackpants/MensTrackpants";
import WomensJackets from "./components/Pages/WomensPage/WomensTopwear/Womens_Jackets/WomensJackets";
import WomensKurti from "./components/Pages/WomensPage/WomensTopwear/Womens_Kurti/WomensKurti";
import WomensTanktops from "./components/Pages/WomensPage/WomensTopwear/Womens_Tanktops/WomensTanktops";
import WomensTshirts from "./components/Pages/WomensPage/WomensTopwear/Womens_Tshirts/WomensTshirts";
import WomensJeans from "./components/Pages/WomensPage/WomensBottomwear/Womens_Jeans/WomensJeans";
import WomensShorts from "./components/Pages/WomensPage/WomensBottomwear/Womens_Shorts/WomensShorts";
import WomensSkirts from "./components/Pages/WomensPage/WomensBottomwear/Womens_Skirts/WomensSkirts";
import WomensTrousers from "./components/Pages/WomensPage/WomensBottomwear/Womens_Trousers/WomensTrousers";
import BoysJeans from "./components/Pages/JuniorsPage/BoysPage/Boys_Jeans/BoysJeans";
import BoysShirts from "./components/Pages/JuniorsPage/BoysPage/Boys_Shirts/BoysShirts";
import BoysShorts from "./components/Pages/JuniorsPage/BoysPage/Boys_Shorts/BoysShorts";
import BoysTshirts from "./components/Pages/JuniorsPage/BoysPage/Boys_Tshirts/BoysTshirts";
import GirlsDresses from "./components/Pages/JuniorsPage/GirlsPage/Girls_Dresses/GirlsDresses";
import GirlsJeans from "./components/Pages/JuniorsPage/GirlsPage/Girls_Jeans/GirlsJeans";
import GirlsSkirts from "./components/Pages/JuniorsPage/GirlsPage/Girls_Skirts/GirlsSkirts";
import GirlsTops from "./components/Pages/JuniorsPage/GirlsPage/Girls_Tops/GirlsTops";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/womens" element={<WomensPage />} />
        <Route path="/juniors" element={<Juniors />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cartpage" element={<CartPage />} />

        {/* mens topwear route  */}

        <Route path="/jackets" element={<MensJackets />} />
        <Route path="/shirts" element={<MensShirts />} />
        <Route path="/men_sweatshirts" element={<MensSweatshirts />} />
        <Route path="/t-shirts" element={<MensTshirt />} />

        {/* mens bottomwear route  */}

        <Route path="/cargos" element={<MensCargos />} />
        <Route path="/mens_jeans" element={<MensJeans />} />
        <Route path="/mens_shorts" element={<MensShorts />} />
        <Route path="/mens_trackpants" element={<MensTrackpants />} />

        {/* womens topwear route  */}

        <Route path="/womens_jackets" element={<WomensJackets />} />
        <Route path="/womens_kurti" element={<WomensKurti />} />
        <Route path="/womens_tanktops" element={<WomensTanktops />} />
        <Route path="/womens_tshirts" element={<WomensTshirts />} />

        {/* womens Bottomwear route  */}

        <Route path="/womens_jeans" element={<WomensJeans />} />
        <Route path="/womens_shorts" element={<WomensShorts />} />
        <Route path="/womens_skirts" element={<WomensSkirts />} />
        <Route path="/womens_trousers" element={<WomensTrousers />} />

        {/* Boys page route  */}

        <Route path="/boys_jeans" element={<BoysJeans />} />
        <Route path="/boys_shirts" element={<BoysShirts />} />
        <Route path="/boys_shorts" element={<BoysShorts />} />
        <Route path="/boys_tshirts" element={<BoysTshirts />} />

        {/* Girls page route  */}

        <Route path="/girls_dress" element={<GirlsDresses />} />
        <Route path="/girls_jeans" element={<GirlsJeans />} />
        <Route path="/girls_skirts" element={<GirlsSkirts />} />
        <Route path="/girls_tops" element={<GirlsTops />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
