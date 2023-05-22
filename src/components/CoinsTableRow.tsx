import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { Coin } from "../types/types";
import { useContext } from "react";
import { CurrencyContext } from "./CurrencyContextProvider";
import { Link } from "react-router-dom";

type Props = Coin & {
  loading: boolean;
};

const CoinsTableRow = ({ loading, ...props }: Props) => {
  const { currency } = useContext(CurrencyContext);

  let curr = currency.sign;

  if (currency.sign === null) curr = currency.symbol;

  return !loading ? (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 leading-[45px]">
      <th scope="row" className="px-6 py-4 whitespace-nowrap dark:text-white">
        {/* <StarIconOutline width={15} height={15} className="mx-1" /> */}
        <span>{props.rank}</span>
      </th>
      <td className="px-6 py-4 font-bold">
        <Link
          to={`/coins/${props.name}`}
          state={{ uuid: props.uuid }}
          className="flex items-center"
        >
          <img src={props.iconUrl} width={20} height={20} className="mr-3" />
          {props.name}
          <span className="text-gray-500 mx-1 text-sm font- uppercase">
            {props.symbol}
          </span>
        </Link>
      </td>
      <td className="px-6 py-4">
        {Math.round(Number(props.price) * 10000) / 10000 + " " + curr}
      </td>
      <td className="px-6 py-4">{props.btcPrice}</td>
      <td
        className={`px-6 py-4 ${
          Number(props.change) >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {props.change + "%"}
      </td>
      {/* <td className="px-6 py-4">{props.dayVolume + "%"}</td> */}
      <td className="px-6 py-4"></td>
      <td className="px-6 py-4"></td>
    </tr>
  ) : (
    <tr
      className={`animate-pulse border-b dark:bg-gray-800 dark:border-gray-700 h-[77.5px] ${
        props.rank % 2 == 0 ? "bg-gray-200" : "bg-gray-300"
      }`}
    >
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};

export default CoinsTableRow;
