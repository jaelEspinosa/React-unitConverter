import { useDispatch, useSelector } from "react-redux";
import { feetToMeters, setFeet } from "../store/slices/convert";




const FeetToMeters = () => {
  
  const dispatch = useDispatch();
  const { meters, feet } = useSelector(state => state.convert);

  const formatMeters = () => {
    // Verifica si los decimales son iguales a cero
    const formattedMiles = parseFloat(meters) === parseInt(meters) ? parseInt(meters) : meters.toFixed(2);
    return formattedMiles;
  };

  const hadleInputChange = (e) =>{
    const newNumber = e.target.value;
   
    dispatch ( setFeet(newNumber))
    dispatch ( feetToMeters(newNumber))
  }
  


  return (
    <div>
    <h2>Feet to Meters </h2>
   Feet-- <input type="number" value={feet === 0 ? '' : feet} onChange={hadleInputChange} placeholder="Met."/>  
   <div>
      <h2 className="result">{formatMeters()} <span>Meters</span></h2>
    </div>

    </div>
  )
}

export default FeetToMeters