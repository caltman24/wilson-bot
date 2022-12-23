import axios from "axios";
import type { QuoteData } from "../@types/wow";

const fetchRandomQuote = async () => {
  const res = axios({
    method: "get",
    url: "https://owen-wilson-wow-api.onrender.com/wows/random",
  });
  const { data } = await res;
  return data[0] as QuoteData;
};

export default fetchRandomQuote;
