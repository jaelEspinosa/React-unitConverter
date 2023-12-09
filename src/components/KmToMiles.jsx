import { useDispatch, useSelector } from "react-redux";

import { kmToMillas, setKm } from "../store/slices/convert";
import Favorites from "./Favorites";

const KmToMiles = () => {
  const dispatch = useDispatch();
  const { miles, km } = useSelector((state) => state.convert);

  const hadleInputChange = (e) => {
    const newNumber = e.target.value;

    dispatch(setKm(newNumber));
    dispatch(kmToMillas(newNumber));
  };

  const formatMiles = () => {
    // Verifica si los decimales son iguales a cero
    const formattedMiles =
      parseFloat(miles) === parseInt(miles)
        ? parseInt(miles)
        : miles.toFixed(2);
    return formattedMiles;
  };

  const formatKm = () => {
    // Verifica si los decimales son iguales a cero
    const formattedMiles =
      parseFloat(km) === parseInt(km) ? parseInt(km) : km.toFixed(2);
    return formattedMiles;
  };

  return (
    <div className="input-section">
      <div className="input-group">
        <input
          id="cantidad"
          name = 'cantidad'
          className="input"
          type="number"
          value={km === 0 ? "" : formatKm()}
          onChange={hadleInputChange}
        />
        <span>Km</span>
      </div>
      <div className="result">
        <h2>{formatMiles()} </h2>
        <span>miles</span>
      </div>
      { km > 0 && <Favorites favorite={`${formatKm()} km -> ${formatMiles()} miles`}/>}
      { km === 0 && <Favorites />}
    </div>
  );
};

export default KmToMiles;
