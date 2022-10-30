import React from "react";
import axios from "axios";
import { BiTrendingUp } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";

const Trending = () => {
  const url = "https://api.coingecko.com/api/v3/search/trending";

  const {
    data: coins,
    isLoading,
    isError,
  } = useQuery(["trending"], () =>
    axios.get(url).then((res) => res.data.coins)
  );

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <div className="flex items-center gap-3 px-2">
        <h1 className="text-2xl font-bold py-4 mx-auto md:mx-0">
          Trending Coins
        </h1>
        <BiTrendingUp className="text-2xl hidden md:flex" />
      </div>

      {isLoading && (
        <div className=" mx-auto w-56 mt-5 py-9">
          <progress className="progress w-56"></progress>
        </div>
      )}

      {isError && (
        <div className="alert alert-error shadow-lg mt-10 md:w-96 mx-auto animate-bounce">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-semibold">
              Error! Task failed successfully.
            </span>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
        {coins?.map((coin, idx) => (
          <div
            key={idx}
            className="rounded-trending flex justify-between p-4 hover:scale-105 ease-in-out duration-300"
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <img
                  className="mr-4 h-14 rounded-full"
                  src={coin?.item.small}
                  alt="/"
                />
                <div>
                  <p className="font-bold">{coin?.item.name}</p>
                  <p>{coin?.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="/"
                />
                <p>{coin?.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
