import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { BikeInfo } from "@types";

const header = {
  token: "jHe3QbAFD62nDuH5qZPNoZPHZxgPL-C5VfgXT_m5ePk",
};

// search?location=Berlin&distance=10

export const api = axios.create({
  baseURL: `https://bikeindex.org/api/v3`,
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
    const data = await api.get<{ bikes: BikeInfo[] }>(
      `${BIKES_PATH}?${Object.entries(options).reduce(
        (prev, curr) => `${prev}&${curr[0]}=${curr[1]}`,
        ""
      )}`
    );
    return data.data;
  });
};
