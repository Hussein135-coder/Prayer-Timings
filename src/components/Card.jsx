/* eslint-disable react/prop-types */
const Card = ({ title, time }) => {
  return (
    <div className=" bg-slate-500 text-center w-max rounded">
      <div className="px-3 py-1 bg-slate-400 text-slate-700 text-xl">
        {title}
      </div>
      <div className="px-10 py-10 text-white text-4xl">{time}</div>
    </div>
  );
};

export default Card;
