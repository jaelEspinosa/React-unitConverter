import { useDispatch, useSelector } from "react-redux";
import { cmToInch, setCm } from "../store/slices/convert";


const CmToInches = () => {



  const dispatch = useDispatch();
  const { inches, cm } = useSelector(state => state.convert);


  const formatInch = () => {
    // Verifica si los decimales son iguales a cero
    const formattedInches = parseFloat(inches) === parseInt(inches) ? parseInt(inches) : inches.toFixed(2);
    return formattedInches;
  };


  const hadleInputChange = (e) =>{
    const newNumber = e.target.value;
   
    dispatch ( setCm(newNumber))
    dispatch ( cmToInch(newNumber))
  }
  return (
    <div>
    <h2>cm to inches </h2>
   Cm. <input type="number" value={cm === 0 ? '' : cm} onChange={hadleInputChange} placeholder="Cm."/>  
   <div>
      <h2 className="result">{formatInch()} <span>Inches</span></h2>
    </div>

    </div>
  )
}

export default CmToInches