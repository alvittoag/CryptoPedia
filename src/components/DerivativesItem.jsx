import { AiOutlineStar } from "react-icons/ai";

export const DerivativesItem = ({ derivatives }) => {
  return (
    <tr className="h-[80px]  overflow-hidden">
      <td className="w-[30px] md:w-[50px]">
        <AiOutlineStar />
      </td>
      <td>
        <div className="flex items-center">
          <img
            className="w-6 mr-2 rounded-full"
            src={derivatives.image}
            alt={derivatives.id}
          />
          <p>{derivatives.name}</p>
        </div>
      </td>
      <td className="lg:w-[180px]">
        ${derivatives.open_interest_btc.toLocaleString()}
      </td>
      <td className="lg:w-[180px] hidden md:table-cell">
        ${derivatives.number_of_perpetual_pairs}
      </td>
      <td className="lg:w-[180px] hidden md:table-cell">
        ${derivatives.number_of_futures_pairs}
      </td>
      <td className="w-[180px] hidden lg:table-cell">
        {derivatives.year_established ? (
          <p>{derivatives.year_established}</p>
        ) : (
          <p className="text-red-600">Not Found</p>
        )}
      </td>
      <td className="w-[180px] hidden lg:table-cell">
        {derivatives.country ? (
          <p>{derivatives.country}</p>
        ) : (
          <p className="text-red-600">Not Found</p>
        )}
      </td>
    </tr>
  );
};
