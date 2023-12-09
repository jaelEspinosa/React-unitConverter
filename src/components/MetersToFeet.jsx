import { useDispatch, useSelector } from "react-redux";
import { metersToFeet, setMeters } from "../store/slices/convert";
import Favorites from "./Favorites";
import { formatUnit } from "../helpers";

const MetersToFeet = () => {

  const dispatch = useDispatch();
  const { meters, feet } = useSelector(state => state.convert);

  const hadleInputChange = (e) =>{
    const newNumber = e.target.value;
   
    dispatch ( setMeters(newNumber))
    dispatch ( metersToFeet(newNumber))
  }
  
  return (
    <div className="input-section">
      <div className="input-group">
        <input
          id="cantidad"
          name="cantidad"
          className="input"
          type="number"
          value={meters === 0 ? "" : formatUnit(meters)}
          onChange={hadleInputChange}
        />
        <span>meters</span>
      </div>

      <div className="result">
        <h2>{formatUnit(feet)} </h2>
        <span>feet</span>
      </div>
      { meters > 0 && <Favorites favorite={`${formatUnit(meters)} meters    →     ${formatUnit(feet)} feet`}/>}
      { meters === 0 && <Favorites />}

    </div>
  );
}

export default MetersToFeet