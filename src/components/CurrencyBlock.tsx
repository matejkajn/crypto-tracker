import { useContext } from "react";
import { Currency } from "../types/types";
import { CurrencyContext } from "./CurrencyContextProvider";

type Props = Currency & {
  loading: boolean;
};

const CurrencyBlock = ({ loading, ...props }: Props) => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  return (
    <div
      className={`flex flex-col justify-center text-xs lg:w-3/12 p-2 h-[55px] rounded-lg xl:mb-0 hover:cursor-pointer hover:bg-slate-100 ${
        currency.uuid === props.uuid ? "bg-slate-100 " : ""
      }`}
      onClick={() =>
        setCurrency({
          ...props,
        })
      }
    >
      <div className="font-bold">{props.name}</div>
      <div className="text-gray-500 font-medium italic">
        {props.sign !== null ? props.symbol + " - " + props.sign : props.symbol}
      </div>
    </div>
  );
};

export default CurrencyBlock;
