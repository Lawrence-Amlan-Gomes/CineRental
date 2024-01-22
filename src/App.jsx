import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import SideBar from "./Components/SideBar";
import { MovieContext, ThemeContext } from "./Context.jsx";
import CartDetails from "./Components/CartDetails.jsx";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [showCartDetails, setShowCartDetails] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleCartDetails = () => {
    setShowCartDetails(!showCartDetails);
  };

  return (
    <>
      <ThemeContext.Provider value={{darkMode, setDarkMode}}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
            {showCartDetails && (
              <CartDetails onHideCartDetails={handleCartDetails} />
            )}
            <Header onShowCartDetails={handleCartDetails} />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <SideBar />
                <MovieList />
              </div>
            </main>

            <Footer />
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
