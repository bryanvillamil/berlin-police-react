import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import { BikeInfo } from "@types";

// const header = {
//   token: "jHe3QbAFD62nDuH5qZPNoZPHZxgPL-C5VfgXT_m5ePk",
// };

export const api = axios.create({
  baseURL: `https://bikeindex.org/api/v3`,
  headers: {
    "Content-type": "application/json"
  }
});

const BIKES_PATH = "/search";

type BikesFilters =
  | "page"
  | "per_page"
  | "serial"
  | "query"
  | "manufacturer"
  | "colors"
  | "location"
  | "distance"
  | "stolenness";

export const useBikes = (
  options: Partial<Record<BikesFilters, string | number>>
) => {
  return useInfiniteQuery([BIKES_PATH, options], async () => {
    const result = await api.get<{ bikes: BikeInfo[] }>(
      `${BIKES_PATH}?${Object.entries(options).reduce(
        (prev, curr) => `${prev}&${curr[0]}=${curr[1]}`,
        ""
      )}`
    );

    return result.data;
  });
};


export const getBikesCount = () => {
  axios.get(`${api}${BIKES_PATH}/count`)
      .then(res => {
        const data = res.data;
        console.log('data', data);
        
      })
}
