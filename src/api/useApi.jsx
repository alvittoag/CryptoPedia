import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useApi = (url, query) => {
  const { data, isLoading, refetch } = useQuery([query], () =>
    axios.get(url).then((res) => res?.data)
  );

  return { data, isLoading, refetch };
};
