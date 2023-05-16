import { useContext } from "react";
import { Currency } from "../types/types";
import { CurrencyContext } from "./CurrencyContextProvider";

type Props = Currency & {
  loading: boolean;
};

const CurrencyBlock = ({ loading, ...props }: Props) => {
  const { currency, setCurrency } = useContext(CurrencyContext);

  const isContextCurrency = currency.uuid === props.uuid ? true : false;

  return (
    <div
      className={`flex justify-between text-xs lg:w-4/12 p-2 h-[55px] rounded-lg xl:mb-0 hover:cursor-pointer hover:bg-slate-100 ${
        isContextCurrency ? "bg-slate-100 " : ""
      }`}
      onClick={() =>
        setCurrency({
          ...props,
        })
      }
    >
      <div className="flex-col flex justify-center">
        <div className="font-bold">{props.name}</div>
        <div className="text-gray-500 font-medium italic">
          {props.sign !== null
            ? props.symbol + " - " + props.sign
            : props.symbol}
        </div>
      </div>
      {isContextCurrency && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="20px"
          width="20px"
          viewBox="0 0 24 24"
          className="sc-aef7b723-0 bpKjzE text-green-600"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM16.7557 9.65493C17.1174 9.23758 17.0723 8.60602 16.6549 8.24431C16.2376 7.8826 15.606 7.92771 15.2443 8.34507L10.8 13.4731L8.75569 11.1143C8.39398 10.6969 7.76242 10.6518 7.34507 11.0135C6.92771 11.3752 6.8826 12.0068 7.24431 12.4242L10.0443 15.6549C10.2343 15.8741 10.51 16 10.8 16C11.09 16 11.3657 15.8741 11.5557 15.6549L16.7557 9.65493Z"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default CurrencyBlock;
