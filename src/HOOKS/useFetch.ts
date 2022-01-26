import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";

export const useFetch = (responseDataFunction, ref, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const { addToast } = useToasts();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // throw new Error('Error here');
        const response = await responseDataFunction(options);
        if (ref.current) {
          setData(response);
        }
      } catch (err) {
        setError(true);
        addToast("Upps... some error here!", { appearance: "error" });
      }
    };
    fetchData();
    return () => {
      ref.current = false;
    };
  }, [responseDataFunction, ref, addToast, data]);
  return { data, error };
};
