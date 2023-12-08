import { useDispatch, useSelector } from "react-redux";
import { metersToFeet, setMeters } from "../store/slices/convert";

const MetersToFeet = () => {

  const dispatch = useDispatch();
  const { meters, feet } = useSelector(state => state.convert);

  const formatFeet = () => {
    // Verifica si los decimales son iguales a cero
    const formattedMiles = parseFloat(feet) === parseInt(feet) ? parseInt(feet) : feet.toFixed(2);
    return formattedMiles;
  };


  const hadleInputChange = (e) =>{
    const newNumber = e.target.value;
   
    dispatch ( setMeters(newNumber))
    dispatch ( metersToFeet(newNumber))
  }
  
  return (
    <div>
    <h2>Meters to Feet</h2>
   Meters-- <input type="number" value={meters === 0 ? '' : meters} onChange={hadleInputChange} placeholder="Met."/>  
   <div>
      <h2 className="result">{formatFeet()} <span>Feet</span></h2>
    </div>

    </div>
  )
}

export default MetersToFeet