/* eslint-disable react/prop-types */
import dayjs from "dayjs";
const City = ({ city }) => {
  const formattedTime = dayjs().format("HH:mm");
  const formattedDate = dayjs().format("YYYY/MM/DD");

  return (
    <div className="text-white text-center lg:text-right lg:px-10 xl:text-center ">
      <h2 className="text-5xl mb-3">{city.arName}</h2>
      <div className="flex justify-center lg:justify-start text-lg xl:justify-center">
        <span className=" border-solid border-l-2 pl-2">{formattedTime}</span>
        <span className="pr-2">{formattedDate}</span>
      </div>
    </div>
  );
};

export default City;
