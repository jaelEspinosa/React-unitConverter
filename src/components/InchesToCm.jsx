import { useDispatch, useSelector } from "react-redux";
import { inchToCm, setInch } from "../store/slices/convert";
import Favorites from "./Favorites";
import { formatUnit } from "../helpers";


const InchesToCm = () => {



  const dispatch = useDispatch();
  const { inches, cm } = useSelector(state => state.convert);

  

  const hadleInputChange = (e) =>{

    const newNumber = e.target.value;   
    dispatch ( setInch(newNumber))
    dispatch ( inchToCm(newNumber))
  }


  return (
    <div className="input-section">
      <div className="input-group">
        <input
          id="cantidad"
          name="cantidad"
          className="input"
          type="number"
          value={inches === 0 ? "" : formatUnit(inches)}
          onChange={hadleInputChange}
        />
        <span>inches</span>
      </div>

      <div className="result">
        <h2>{formatUnit(cm)} </h2>
        <span>cm</span>
      </div>
      { cm > 0 && <Favorites favorite={`${formatUnit(inches)} inches     →     ${formatUnit(cm)} cm`}/>}
      { cm === 0 && <Favorites />}

    </div> 
    
  )
}

export default InchesToCm



