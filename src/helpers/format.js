


export const formatUnit = ( unit ) => {
    
    const formattedMiles =
      parseFloat(unit) === parseInt(unit)
        ? parseInt(unit)
        : unit.toFixed(2);
    return formattedMiles;
  }