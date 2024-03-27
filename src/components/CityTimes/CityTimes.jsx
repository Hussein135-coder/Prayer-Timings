/* eslint-disable react/prop-types */
import City from "./City";
import SelectCity from "./SelectCity";
import Time from "./Time";

const CityTimes = ({
  changeCity,
  city,
  changeCountry,
  country,
  timing,
  timingsNames,
  setChangedByPosition,
  changedByPosition,
}) => {
  return (
    <div className="container mx-auto grid grid-cols-auto-200 sm:grid-cols-auto-400 lg:grid-cols-auto-300 items-center mb-20 gap-y-5">
      <City city={city} country={country} />
      <SelectCity
        setCity={changeCity}
        city={city}
        setCountry={changeCountry}
        country={country}
        byPosition={changedByPosition}
        setByPosition={setChangedByPosition}
      />
      <Time timingsNames={timingsNames} data={timing} />
    </div>
  );
};

export default CityTimes;
