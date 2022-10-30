import React, { useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { useApi } from "../api/useApi";

import CoinItem from "./CoinItem";
import { Pagination } from "./Pagination";

const CoinSearch = () => {
  const [countPage, setCountPage] = useState(1);
  const [input, setInput] = useState("");
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${countPage}&sparkline=true`;

  const { data, isLoading, refetch } = useApi(url);

  useEffect(() => {
    refetch();
  });

  const handlePage = (page) => {
    setCountPage(page);
    refetch();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="rounded-div my-4">
        <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
          <div className="flex items-center gap-3 mx-auto md:mx-0 py-2">
            <CgShoppingCart className="text-2xl" />
            <h1 className="text-2xl font-bold my-2 mx-auto">
              Market Cryptocurrency
            </h1>
          </div>
          <div>
            <form>
              <input
                type="text"
                className="bg-input border py-1 px-2 rounded-lg"
                placeholder="Search a Coin..."
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
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
                  <th className="px-4">#</th>
                  <th className="text-left">Coin</th>
                  <th></th>
                  <th>Price</th>
                  <th className="hidden md:table-cell">24h</th>
                  <th className="hidden lg:table-cell">24h Volume</th>
                  <th className="hidden sm:table-cell">Mkt</th>
                  <th>Last 7 Days</th>
                </tr>
              </thead>
              <tbody>
                {data
                  ?.filter((coin) =>
                    input === coin.name ? <p>test</p> : <p>test</p>
                  )
                  ?.map((coin) => (
                    <CoinItem coin={coin} key={coin.id} />
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
    </>
  );
};

export default CoinSearch;
