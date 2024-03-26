import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import CityTimes from "./components/CityTimes/CityTimes";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";

function App() {
  const [city, setCity] = useState({
    engName: "Damascus",
    arName: "دمشق",
  });
  const url = `http://api.aladhan.com/v1/timingsByCity?city=${city.engName}&country=Syria&method=8`;

  const timingsNames = [
    { prayer: "Fajr", arName: "الفجر" },
    { prayer: "Dhuhr", arName: "الظهر" },
    { prayer: "Asr", arName: "العصر" },
    { prayer: "Maghrib", arName: "المغرب" },
    { prayer: "Isha", arName: "العشاء" },
  ];
  const { data, loading, error } = useFetch(url);
  console.log(error);
  return (
    <div className="container mx-auto">
      <Header />
      <CityTimes
        changeCity={setCity}
        city={city}
        timing={data}
        timingsNames={timingsNames}
      />
      <div className="flex justify-center gap-4 flex-wrap">
        {timingsNames.map((time, i) => {
          return (
            <div className=" pb-10" key={i}>
              <Card
                title={time.arName}
                time={loading ? loading : data?.timings[time.prayer]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
