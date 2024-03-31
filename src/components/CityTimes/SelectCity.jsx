/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import countries from "../../data/countries";
import { toast } from "react-toastify";
const SelectCity = ({
  setCity,
  setCountry,
  city,
  country,
  setByPosition,
  byPosition,
}) => {
  const [cities, setCities] = useState([{ id: 104940, name: "Ad Darbāsīyah" }]);

  const headers = new Headers();
  headers.append("X-CSCAPI-KEY", import.meta.env.VITE_COUNTRIES_API_KEY);

  const requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };

  const getCities = async (country) => {
    try {
      const res = await fetch(
        `https://api.countrystatecity.in/v1/countries/${country}/cities`,
        requestOptions
      );
      const data = await res.text();
      const parsedData = JSON.parse(data);
      if (byPosition) {
        setByPosition(false);
      } else {
        setCity({
          engName: parsedData[0].name,
          arName: parsedData[0].name,
        });
      }
      setCities(parsedData);
    } catch (error) {
      toast.error("حدث خطأ ما، قم بإعادة تحميل الصفحة", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    setCities(["..."]);
    getCities(country.iso);
  }, [country]);

  const handleChange = (e) => {
    setCity({
      engName: e.target.value,
      arName: e.target.selectedOptions[0].textContent,
    });
  };

  const handleChangeCountry = (e) => {
    setCountry({
      iso: e.target.value,
      arName: e.target.selectedOptions[0].textContent,
    });
  };
  return (
    <>
      <div className="text-center">
        <label className="block text-white text-xl mb-2" htmlFor="city">
          البلد:
        </label>
        <select
          onChange={handleChangeCountry}
          className="w-[80%] py-2 px-1 outline-none rounded"
          name="country"
          id="country"
          value={country.iso}
        >
          {countries.map((cn) => {
            return (
              <option key={cn.id} value={cn.iso2}>
                {cn.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="text-center">
        <label className="block text-white text-xl mb-2" htmlFor="city">
          المدينة:
        </label>
        <select
          onChange={handleChange}
          className="w-[80%] py-2 px-1 outline-none rounded"
          name="city"
          id="city"
          value={city.engName}
        >
          {cities.map((cy) => {
            return (
              <option key={cy.id} value={cy.name}>
                {cy.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SelectCity;
