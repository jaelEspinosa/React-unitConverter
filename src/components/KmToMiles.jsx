import { useDispatch, useSelector } from "react-redux";
import { kmToMillas, setKm } from "../store/slices/convert";
import Favorites from "./Favorites";
import { formatUnit } from "../helpers";



const KmToMiles = () => {  
  const dispatch = useDispatch();
  const { miles, km } = useSelector((state) => state.convert);
  const hadleInputChange = (e) => {
    const newNumber = e.target.value;
    dispatch(setKm(newNumber));
    dispatch(kmToMillas(newNumber));
  };  

  return (
    <div className="input-section">
      <div className="input-group">
        <input
          id="cantidad"
          name = 'cantidad'
          className="input"
          type="number"
          value={km === 0 ? "" : formatUnit(km)}
          onChange={hadleInputChange}
        />
        <span>Km</span>
      </div>
      <div className="result">
        <h2>{formatUnit(miles)} </h2>
        <span>miles</span>
      </div>
      { km > 0 && <Favorites favorite={`${formatUnit(km)} km     →     ${formatUnit(miles)} miles`}/>}
      { km === 0 && <Favorites />}
    </div>
  );
};

export default KmToMiles;
