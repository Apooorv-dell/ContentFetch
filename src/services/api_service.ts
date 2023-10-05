import axios, { CanceledError } from "axios";
import { Response } from "../type/data";
import { useState, useEffect } from "react";


const useData = (input: String ,des: String,  page: Number = 10) => {
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios

  
      .post("https://api.gyanibooks.com/search_publication/", {
        keyword: input,
        limit: page,
      })
      .then((res) => setData(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, [des]);

  return { data, error };
};

export default useData;
