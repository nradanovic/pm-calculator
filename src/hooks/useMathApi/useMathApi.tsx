import Axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export default function useMathApi({ expression }: { expression: string }) {
  const [result, setResult] = useState(expression);
  const debounceTime = 600;

  useEffect(() => {
    if (!expression) {
      setResult("");
      return;
    }

    const fetchData = async () => {
      const url = "http://api.mathjs.org/v4/";
      const requestConfig: AxiosRequestConfig = {
        params: {
          expr: expression,
        },
      };

      try {
        const result = await Axios.get(url, requestConfig);
        setResult(result.data);
      } catch (error) {
        setResult("Invalid expression");
      }
    };

    const reqTimeout = setTimeout(() => fetchData(), debounceTime);
    return () => clearTimeout(reqTimeout);
  }, [expression]);

  return { result };
}
