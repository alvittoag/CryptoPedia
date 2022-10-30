import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const ExchangeItem = ({ exchange }) => {
  return (
    <tr className="h-[80px]  overflow-hidden">
      <td className="w-[28px] md:w-0">
        <AiOutlineStar />
      </td>
      <td className="hidden md:table-cell md:w-[65px] lg:w-[105px]">
        {exchange.trust_score_rank}
      </td>
      <td>
        <div className="flex items-center">
          <img
            className="w-6 mr-2 rounded-full"
            src={exchange.image}
            alt={exchange.id}
          />
          <p>{exchange.name}</p>
        </div>
      </td>

      <td>
        <progress
          className="progress progress-success w-16 md:w-24 lg:w-40 mr-3"
          value={exchange.trust_score}
          max="10"
        ></progress>
        {exchange.trust_score}
      </td>
      <td className=" md:w-[120px] lg:w-[180px] hidden md:table-cell">
        ${exchange.trade_volume_24h_btc_normalized.toLocaleString()}
      </td>
      <td className="md:w-[120px] lg:w-[180px]  hidden md:table-cell">
        ${exchange.trade_volume_24h_btc.toLocaleString()}
      </td>
      <td className="w-[180px] hidden lg:table-cell">
        {exchange.country ? (
          <p>{exchange.country}</p>
        ) : (
          <p className="text-red-600">Not Found</p>
        )}
      </td>
    </tr>
  );
};

export default ExchangeItem;
