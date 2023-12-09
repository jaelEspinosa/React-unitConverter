/* eslint-disable react-hooks/exhaustive-deps */

import MilesToKm from "./components/MilesToKm";
import KmToMiles from "./components/KmToMiles";
import MetersToFeet from "./components/MetersToFeet";
import FeetToMeters from "./components/FeetToMeters";
import CmToInches from "./components/CmToInches";
import InchesToCm from "./components/InchesToCm";
import { useDispatch, useSelector } from "react-redux";
import { setLocalStorageFav, setSelectedValue } from "./store/slices/convert";
import FavoritesCard from "./components/favoritesCard";
import { useEffect, useRef } from "react";

function App() {
  const dispatch = useDispatch();
  const hasMounted = useRef(false);
  const { selectedValue, favorites } = useSelector((state) => state.convert);

  const hadleChange = (e) => {
    dispatch(setSelectedValue(e.target.value));
  };

  useEffect(() => {
    if (!hasMounted.current) {
      const favLocalStorage = JSON.parse(localStorage.getItem("favorites"));
      if (!favLocalStorage) return;
      dispatch(setLocalStorageFav(favLocalStorage));
      hasMounted.current = true;
    }
  }, []);

  const handleButtonClick = () => {
    selectedValue === "MilesToKm" && dispatch(setSelectedValue("KmToMiles"));
    selectedValue === "KmToMiles" && dispatch(setSelectedValue("MilesToKm"));
    selectedValue === "MetersToFeet" &&
      dispatch(setSelectedValue("FeetToMeters"));
    selectedValue === "FeetToMeters" &&
      dispatch(setSelectedValue("MetersToFeet"));
    selectedValue === "CmToInches" && dispatch(setSelectedValue("InchesToCm"));
    selectedValue === "InchesToCm" && dispatch(setSelectedValue("CmToInches"));
  };

  const renderComponent = () => {
    switch (selectedValue) {
      case "MilesToKm":
        return <MilesToKm />;
      case "KmToMiles":
        return <KmToMiles />;
      case "MetersToFeet":
        return <MetersToFeet />;
      case "FeetToMeters":
        return <FeetToMeters />;
      case "CmToInches":
        return <CmToInches />;
      case "InchesToCm":
        return <InchesToCm />;
      default:
        return null;
    }
  };

  return (
    <>
      <header className="header">
        <div>
          <i className="fa-sharp fa-solid fa-arrow-right-arrow-left"></i>
          <span className="span-header"> unit converter </span>
        </div>
      </header>

      <main>
        <div className="converter">
          <div className="select-section">
            <h4>convert</h4>
            <div className="select-group">
              <select
                className="select"
                id="conversor"
                onChange={hadleChange}
                value={selectedValue}
              >
                <option value="">Select</option>
                <option value="KmToMiles">Km &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Miles</option>
                <option value="MilesToKm">Miles &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Km</option>
                <option value="MetersToFeet">Meters &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Feet</option>
                <option value="FeetToMeters">Feet &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Meters</option>
                <option value="CmToInches">Cm &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Inches</option>
                <option value="InchesToCm">Inches &nbsp;&nbsp; &rarr;&nbsp;&nbsp; Cm</option>
              </select>
              <p onClick={handleButtonClick} disabled={!selectedValue}>
                <i className="fa-sharp fa-solid fa-arrow-right-arrow-left"></i>
              </p>
            </div>
          </div>
          {renderComponent()}
        </div>
        <div className="title-container">
        
          <h2 className="title-favorites">{favorites.length > 0  ? 'Saved' : ' Save your favorites '}</h2>
        
        </div>

        <div className="favorites-container">
          <div className="favorites-card">
            <FavoritesCard />
          </div>
        </div>
      </main>
      <footer className="footer">
        <span>Terms of service</span>
        <span>Privacy policy</span>
      </footer>
    </>
  );
}

export default App;
