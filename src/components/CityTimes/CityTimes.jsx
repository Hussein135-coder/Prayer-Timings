/* eslint-disable react/prop-types */
import City from "./City";
import SelectCity from "./SelectCity";
import Time from "./Time";

const CityTimes = ({ changeCity, city, timing, timingsNames }) => {
  return (
    <div className="container mx-auto grid grid-cols-auto-325 sm:grid-cols-auto-400 items-center mb-20 gap-y-5">
      <City city={city} />
      <SelectCity setCity={changeCity} />
      <Time timingsNames={timingsNames} data={timing} />
    </div>
  );
};

export default CityTimes;
