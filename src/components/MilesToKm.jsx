import { useDispatch, useSelector } from "react-redux";
import { millasToKm, setMiles } from "../store/slices/convert";
import Favorites from "./Favorites";
import { formatUnit } from "../helpers";

const MilesToKm = () => {
  const dispatch = useDispatch();

  const { km, miles } = useSelector((state) => state.convert);
  const hadleInputChange = (event) => {
    const newNumber = event.target.value;
    dispatch(setMiles(newNumber));
    dispatch(millasToKm(newNumber));
  };

  
  return (
    <div className="input-section">
      <div className="input-group">
        <input
          id="cantidad"
          name="cantidad"
          className="input"
          type="number"
          value={miles === 0 ? "" : formatUnit(miles)}
          onChange={hadleInputChange}
        />
        <span>miles</span>
      </div>

      <div className="result">
        <h2>{formatUnit(km)} </h2>
        <span>Km</span>
      </div>
      { miles > 0 && <Favorites favorite={`${formatUnit(miles)} miles    →     ${formatUnit(km)} km`}/>}
      { miles === 0 && <Favorites />}

    </div>
  );
};

export default MilesToKm;
