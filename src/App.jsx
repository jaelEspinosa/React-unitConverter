import MilesToKm from "./components/MilesToKm";
import KmToMiles from "./components/KmToMiles";
import MetersToFeet from "./components/MetersToFeet";
import FeetToMeters from "./components/FeetToMeters";
import CmToInches from "./components/CmToInches";
import InchesToCm from "./components/InchesToCm";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedValue } from "./store/slices/convert";
import FavoritesCard from "./components/favoritesCard";

function App() {
  const dispatch = useDispatch();
  const { selectedValue } = useSelector((state) => state.convert);

  const hadleChange = (e) => {
    dispatch(setSelectedValue(e.target.value));
  };

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
              <select  className='select' id="conversor" onChange={hadleChange} value={selectedValue}>
                <option value=""> </option>
                <option value="KmToMiles">Km to Miles</option>
                <option value="MilesToKm">Miles to Km</option>
                <option value="MetersToFeet">Meters to Feet</option>
                <option value="FeetToMeters">Feet to Meters</option>
                <option value="CmToInches">Cm to Inches</option>
                <option value="InchesToCm">Inches to Cm</option>
              </select>
              <p onClick={handleButtonClick} disabled={!selectedValue}>
                <i className="fa-sharp fa-solid fa-arrow-right-arrow-left"></i>
              </p>
            </div>
        </div>
          {renderComponent()}


        </div>
        <h2 className="title-favorites">Saved</h2>
        <div className="favorites-card">
        <FavoritesCard />
        </div>

      </main>
    </>
  );
}

export default App;
