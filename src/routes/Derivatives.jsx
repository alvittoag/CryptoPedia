import { useEffect, useState } from "react";
import { RiExchangeCnyFill } from "react-icons/ri";
import { useApi } from "../api/useApi";
import { DerivativesItem } from "../components/DerivativesItem";

export const Derivatives = () => {
  const [countPage, setCountPage] = useState(10);
  const url = `https://api.coingecko.com/api/v3/derivatives/exchanges?per_page=${countPage}`;

  const { data, isLoading, refetch } = useApi(url, "derivatives");
  useEffect(() => {
    refetch();
  });

  const handlePage = () => {
    setCountPage(countPage + 10);
    refetch();
  };

  return (
    <>
      <div className="rounded-div my-4">
        <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
          <div className="flex items-center gap-3 mx-auto md:mx-0 py-2">
            <RiExchangeCnyFill className="text-2xl" />
            <h1 className="text-2xl font-bold my-2 mx-auto">
              Derivatives Exchanges
            </h1>
          </div>
          <div></div>
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
                  <th className="text-left">Exchange</th>
                  <th>24h Open Interest</th>
                  <th className="hidden md:table-cell">Perpetuals</th>
                  <th className="hidden md:table-cell">Futures</th>
                  <th className="hidden lg:table-cell">Year</th>
                  <th className="hidden lg:table-cell">Country</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((derivatives) => (
                  <DerivativesItem
                    derivatives={derivatives}
                    key={derivatives.id}
                  />
                ))}
              </tbody>
            </table>
            <div className="py-8 ">
              <h1
                onClick={handlePage}
                className="text-center bg-button text-btnText w-28 py-2 rounded-xl mx-auto hover:cursor-pointer"
              >
                Show More
              </h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};
