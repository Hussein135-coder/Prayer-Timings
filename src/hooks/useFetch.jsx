import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function useFetch(url, city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(<FontAwesomeIcon className=" animate-spin" icon={faSpinner} />);
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    if (city.engName != "") {
      axios
        .get(url, { cancelToken: source.token })
        .then((res) => {
          setLoading(false);

          res.data && setData(res.data.data);
          res.content && setData(res.content);
        })
        .catch(() => {
          setLoading(false);
          setError("حدث خطأ ما");
        });
    }

    return () => {
      source.cancel();
    };
  }, [city]);

  return { data, loading, error };
}
export default useFetch;
