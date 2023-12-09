import { useDispatch, useSelector } from "react-redux";
import { millasToKm, setMiles } from "../store/slices/convert";
import Favorites from "./Favorites";

const MilesToKm = () => {
  const dispatch = useDispatch();

  const { km, miles } = useSelector((state) => state.convert);
  const hadleInputChange = (event) => {
    const newNumber = event.target.value;
    dispatch(setMiles(newNumber));
    dispatch(millasToKm(newNumber));
  };

  const formatKm = () => {
    // Verifica si los decimales son iguales a cero
    const formattedMiles =
      parseFloat(km) === parseInt(km) ? parseInt(km) : km.toFixed(2);
    return formattedMiles;
  };

  const formatMiles = () => {
    // Verifica si los decimales son iguales a cero
    const formattedMiles =
      parseFloat(miles) === parseInt(miles)
        ? parseInt(miles)
        : miles.toFixed(2);
    return formattedMiles;
  };
  return (
    <div className="input-section">
      <div className="input-group">
        <input
          id="cantidad"
          name="cantidad"
          className="input"
          type="number"
          value={miles === 0 ? "" : formatMiles()}
          onChange={hadleInputChange}
        />
        <span>miles</span>
      </div>

      <div className="result">
        <h2>{formatKm()} </h2>
        <span>Km</span>
      </div>
      { miles > 0 && <Favorites favorite={`${formatMiles()} miles -> ${formatKm()} km`}/>}
      { miles === 0 && <Favorites />}

    </div>
  );
};

export default MilesToKm;
