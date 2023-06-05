import { useLocation } from "react-router-dom";
import { useGetCoin } from "../hooks/useGetCoin";
import { CoinDetail } from "../types/types";
import BaseLayout from "../layouts/BaseLayout";
import { useContext } from "react";
import { CurrencyContext } from "../components/CurrencyContextProvider";
import {
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
} from "@heroicons/react/24/solid";
import CoinHistoryGraph from "../components/CoinHistoryGraph";

const CoinPage = () => {
  const { state } = useLocation();
  const [loading, data, error] = useGetCoin<CoinDetail>({ uuid: state.uuid });

  const { currency } = useContext(CurrencyContext);

  let curr = currency.sign;

  if (currency.sign === null) curr = currency.symbol;

  if (error) throw new Error("There was a problem while obtaining coin data.");

  const coin = data?.data.coin;

  return (
    <BaseLayout>
      <div className="w-4/5 mx-auto p-10 ">
        <div className="text-xl flex items-end justify-between">
          <div className="font-bold text-3xl flex  items-end">
            <img src={coin?.iconUrl} width={40} height={40} />
            <h1 className="px-5">{coin?.name}</h1>
            <span className="text-gray-500 uppercase">{coin?.symbol}</span>
          </div>
          <div className="flex">
            Price:{" "}
            <span className="font-bold mx-4">
              {Math.round(Number(coin?.price) * 10000) / 10000 + " " + curr}
            </span>
            <span
              className={`font-semibold text-lg flex items-center ${
                Number(coin?.change) >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {coin?.change + "%"}
              {Number(coin?.change) >= 0 ? (
                <ArrowSmallUpIcon width={20} height={20} />
              ) : (
                <ArrowSmallDownIcon width={20} height={20} />
              )}
            </span>
          </div>
        </div>
        <div className="mt-[80px] p-4 text-center">{coin?.description}</div>
        <div className="mx-auto">
          <CoinHistoryGraph graphColor={coin?.color} />
        </div>
        {coin?.websiteUrl !== null && (
          <div className="m-4 text-center bottom-0">
            <a
              className="font-semibold text-indigo-500 m-4 hover:underline cursor-pointer"
              target="_blank"
              href={coin?.websiteUrl}
            >
              More info
            </a>
          </div>
        )}
      </div>
    </BaseLayout>
  );
};

export default CoinPage;
