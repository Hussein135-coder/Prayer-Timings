import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CityTimes from "./components/CityTimes/CityTimes";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
import GetPosition from "./components/GetPosition";

function App() {
  const [country, setCountry] = useState({
    iso: "SY",
    arName: "سوريا",
  });
  const [city, setCity] = useState({
    engName: "",
    arName: "",
  });

  const [changedByPosition, setChangedByPosition] = useState(false);

  const url = `https://api.aladhan.com/v1/timingsByCity?city=${city.engName}&country=${country.iso}&method=8`;

  const timingsNames = [
    { prayer: "Fajr", arName: "الفجر" },
    { prayer: "Dhuhr", arName: "الظهر" },
    { prayer: "Asr", arName: "العصر" },
    { prayer: "Maghrib", arName: "المغرب" },
    { prayer: "Isha", arName: "العشاء" },
  ];
  const { data, loading, error } = useFetch(url, city);
  console.log(error);
  return (
    <div className="container mx-auto">
      <Header />
      <CityTimes
        changeCity={setCity}
        city={city}
        changeCountry={setCountry}
        country={country}
        timing={data}
        timingsNames={timingsNames}
        setChangedByPosition={setChangedByPosition}
        changedByPosition={changedByPosition}
      />
      <div className="flex justify-center gap-4 flex-wrap">
        {timingsNames.map((time, i) => {
          return (
            <div className=" pb-10 w-[165px]" key={i}>
              <Card
                title={time.arName}
                time={loading ? loading : data?.timings[time.prayer]}
              />
            </div>
          );
        })}
      </div>
      <GetPosition
        setChangedByPosition={setChangedByPosition}
        setCity={setCity}
        setCountry={setCountry}
      />
    </div>
  );
}

export default App;
