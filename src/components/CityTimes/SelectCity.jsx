import cities from "../../data/cities";
// eslint-disable-next-line react/prop-types
const SelectCity = ({ setCity }) => {
  const handleChange = (e) => {
    setCity({
      engName: e.target.value,
      arName: e.target.selectedOptions[0].textContent,
    });
  };
  console.log(cities);
  return (
    <div className="text-center">
      <label className="block text-white text-xl mb-2" htmlFor="city">
        المدينة:
      </label>
      <select
        onChange={handleChange}
        className="w-[80%] py-2 px-1 outline-none rounded"
        name="city"
        id="city"
      >
        {cities.map((city, i) => {
          return (
            <option key={i} value={city.engName}>
              {city.arName}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectCity;
