import { useDispatch, useSelector } from "react-redux";
import { feetToMeters, setFeet } from "../store/slices/convert";
import Favorites from "./Favorites";
import { formatUnit } from "../helpers";




const FeetToMeters = () => {  
  const dispatch = useDispatch();
  const { meters, feet } = useSelector(state => state.convert);

  const hadleInputChange = (e) =>{
    const newNumber = e.target.value;     
    dispatch ( setFeet(newNumber));
    dispatch ( feetToMeters(newNumber));
  }
  
  return (
    <div className="input-section">
      <div className="input-group">
        <input
          id="cantidad"
          name="cantidad"
          className="input"
          type="number"
          value={feet === 0 ? "" : formatUnit(feet)}
          onChange={hadleInputChange}
        />
        <span>feet</span>
      </div>

      <div className="result">
        <h2>{formatUnit(meters)} </h2>
        <span>meters</span>
      </div>
      { meters > 0 && <Favorites favorite={`${formatUnit(feet)} feet     →     ${formatUnit(meters)} meters`}/>}
      { meters === 0 && <Favorites />}

    </div>    
  )
}

export default FeetToMeters