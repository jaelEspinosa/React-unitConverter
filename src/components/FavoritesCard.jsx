import {  useSelector } from "react-redux"


const FavoritesCard = () => {


const { favorites } = useSelector((state) => state.convert);

  return (
    <>
      
      {favorites.map((fav, index) => (
        <div  className = 'item-card' key = {index}>
            <span>{fav}</span>
            <span> x </span>
            
        </div>
      ))}
    </>
  )
}

export default FavoritesCard