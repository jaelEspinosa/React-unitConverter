import { useDispatch, useSelector } from "react-redux";
import { cmToInch, setCm } from "../store/slices/convert";
import { formatUnit } from "../helpers";
import Favorites from "./Favorites";


const CmToInches = () => {
  const dispatch = useDispatch();
  const { inches, cm } = useSelector(state => state.convert);

  const hadleInputChange = (e) =>{
    const newNumber = e.target.value;   
    dispatch ( setCm(newNumber))
    dispatch ( cmToInch(newNumber))
  }
  
  return (
    <div className="input-section">
      <div className="input-group">
        <input
          id="cantidad"
          name="cantidad"
          className="input"
          type="number"
          value={cm === 0 ? "" : formatUnit(cm)}
          onChange={hadleInputChange}
        />
        <span>cm</span>
      </div>

      <div className="result">
        <h2>{formatUnit(inches)} </h2>
        <span>inches</span>
      </div>
      { inches > 0 && <Favorites favorite={`${formatUnit(cm)} cm     →     ${formatUnit(inches)} inches`}/>}
      { inches === 0 && <Favorites />}

    </div>    
  )
}

export default CmToInches