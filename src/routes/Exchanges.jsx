import { useEffect, useState } from "react";
import { RiExchangeDollarFill } from "react-icons/ri";
import { useApi } from "../api/useApi";

import ExchangeItem from "../components/ExchangeItem";
import { Pagination } from "../components/Pagination";

export const Exchanges = () => {
  const [countPage, setCountPage] = useState(1);
  const url = `https://api.coingecko.com/api/v3/exchanges?per_page=10&page=${countPage}`;

  const { data, isLoading, refetch } = useApi(url, "exchange");

  useEffect(() => {
    refetch();
  });

  const handlePage = (page) => {
    setCountPage(page);
    refetch();
    window.scrollTo(0, 0);
  };
  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <div className="flex items-center gap-3 mx-auto md:mx-0 py-2">
          <RiExchangeDollarFill className="text-2xl" />
          <h1 className="text-2xl font-bold my-2">Crypto Exchanges</h1>
        </div>
      </div>

      {isLoading ? (
        <div className=" mx-auto w-56 -mt-12 py-14">
          <progress className="progress w-56"></progress>
        </div>
      ) : (
        <>
          <table className="w-full border-collapse text-center">
            <thead className="border-b py-10">
              <tr className="h-14">
                <th></th>
                <th className="hidden md:table-cell">#</th>
                <th className="text-left">Exchange</th>
                <th>Trust Score</th>
                <th className=" hidden md:table-cell">
                  24h volume (Normalized)
                </th>
                <th className=" hidden md:table-cell">24h Volume</th>
                <th className=" hidden lg:table-cell">Country</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((exchange) => (
                <ExchangeItem exchange={exchange} key={exchange.id} />
              ))}
            </tbody>
          </table>
          <div className="py-12 w-full mx-auto">
            <div className="btn-group w-full">
              <div className="mx-auto">
                <Pagination handlePage={handlePage} countPage={countPage} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
