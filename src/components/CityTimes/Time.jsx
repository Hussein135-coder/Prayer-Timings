/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration.js";
import { useEffect, useState } from "react";

dayjs.extend(duration);

const Time = ({ data, timingsNames }) => {
  const [nextTime, setNextTime] = useState(-1);
  const [diffTime, setDiffTime] = useState("");
  const [diffZero, setDiffZero] = useState("");

  const timeNow = dayjs().format("HH:mm:ss");
  const fromT = dayjs(`2000-01-01 ${timeNow}`);
  const halfT = dayjs(`2000-01-01 23:59:59`);
  const ishaT = dayjs(`2000-01-01 ${data?.timings["Isha"]}`);

  const afterIsha = ishaT.diff(fromT, "secondes", true);
  const halfTime = halfT.diff(fromT, "secondes", true);
  const afterIshaCheck = afterIsha < 0 && halfTime >= 0;

  useEffect(() => {
    if (afterIshaCheck) {
      setNextTime(0);
    } else {
      for (let i = 0; i < timingsNames.length; i++) {
        const toT = dayjs(
          `2000-01-01 ${data?.timings[timingsNames[i].prayer]}`
        );
        const nextTimeDiff = toT.diff(fromT, "secondes", true);

        if (nextTimeDiff > 0) {
          setNextTime(i);
          break;
        }
      }
    }
  }, [data, diffZero, afterIshaCheck]);

  const changeTime = () => {
    setDiffZero(1);
    const timeNow = dayjs().format("HH:mm:ss");

    const fromT = dayjs(`2000-01-01 ${timeNow}`);

    const nextSalatTime = data?.timings[timingsNames[nextTime]?.prayer];

    const toT = dayjs(`2000-01-${afterIshaCheck ? 2 : 1} ${nextSalatTime}`);

    const diff = toT.diff(fromT, "seconds", true);

    if (diff == 0) {
      setDiffZero(diff);
    }
    setDiffTime(diff);
  };

  useEffect(() => {
    changeTime();
    const time = setInterval(changeTime, 1000);
    return () => {
      clearInterval(time);
    };
  }, [nextTime, data]);

  const duration = dayjs.duration(diffTime, "seconds");
  const formattedTime = duration.format("HH:mm:ss");

  return (
    <div className="text-center lg:col-span-12 xl:col-span-1">
      <h2 className="text-white text-2xl mb-2">
        صلاة {timingsNames[nextTime]?.arName || "..."} بعد:
      </h2>
      <span className="text-white text-2xl">
        {data ? formattedTime : "..."}
      </span>
    </div>
  );
};

export default Time;
