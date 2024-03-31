import { Ripple, Modal, initTWE } from "tw-elements";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

initTWE({ Modal, Ripple });

// eslint-disable-next-line react/prop-types
const GetPosition = ({ setCountry, setCity, setChangedByPosition }) => {
  const [url, setUrl] = useState("");
  const [loadingBtn, setLoadingBtn] = useState(null);

  const fetchLocation = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data, "data");

      setLoadingBtn(false);
      setCountry({
        iso: data.countryCode,
        arName: data.countryName,
      });
      setChangedByPosition(true);
      setCity({
        engName: data.city,
        arName: data.city,
      });
      toast.success(`المدينة: ${data.city}`, {
        position: "top-center",
      });
    } catch (error) {
      console.log(error, "error");
      setLoadingBtn(false);
      toast.error("حدث خطأ ما", {
        position: "top-center",
      });
    }
  };

  useEffect(() => {
    if (url) {
      fetchLocation(url);
    }
  }, [url]);

  const successFunc = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    setUrl(url);
  };

  const errorFunc = () => {
    setLoadingBtn(false);
    toast.error("حدث خطأ ما", {
      position: "top-center",
    });
  };

  const handleClick = () => {
    setUrl("");
    setLoadingBtn(true);
    if (!navigator.geolocation) {
      setLoadingBtn(false);
      toast.error("عذرا، متصفحك لا يدعم هذه الميزة", {
        position: "top-center",
      });
    } else {
      navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
    }
  };

  return (
    <div className="flex justify-center pb-8">
      <button
        type="button"
        onClick={handleClick}
        data-twe-ripple-init
        data-twe-ripple-color="light"
        className="flex items-center rounded bg-[#9aa3b8] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-[#1e293b] shadow-primary-3 transition duration-150 ease-in-out hover:bg-slate-500 hover:text-white focus:text-white  focus:bg-slate-500  focus:outline-none focus:ring-0 active:bg-slate-500 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 ml-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
        {loadingBtn == true ? "جار تحديد الموقع" : "حدد موقعي"}
      </button>
    </div>
  );
};

export default GetPosition;
