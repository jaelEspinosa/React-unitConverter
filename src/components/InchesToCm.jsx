import { useDispatch, useSelector } from "react-redux";
import { inchToCm, setInch } from "../store/slices/convert";


const InchesToCm = () => {



  const dispatch = useDispatch();
  const { inches, cm } = useSelector(state => state.convert);

  const formatCm = () => {
    // Verifica si los decimales son iguales a cero
    const formattedInches = parseFloat(cm) === parseInt(cm) ? parseInt(cm) : cm.toFixed(2);
    return formattedInches;
  };

  const hadleInputChange = (e) =>{
    const newNumber = e.target.value;
   
    dispatch ( setInch(newNumber))
    dispatch ( inchToCm(newNumber))
  }


  return (
    <div>
    <h2>Inches to Cm </h2>
   Inches <input type="number" value={inches === 0 ? '' : inches} onChange={hadleInputChange} placeholder="Cm."/>  
   <div>
      <h2 className="result">{formatCm()} <span>Cm.</span></h2>
    </div>

    </div>
  )
}

export default InchesToCm