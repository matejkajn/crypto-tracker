import { useContext, useEffect, useState } from "react";
import { useGetCurrencies } from "../hooks/usetGetCurrencies";
import { Currencies, Currency } from "../types/types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import CurrencyBlock from "./CurrencyBlock";
import { CurrencyContext } from "./CurrencyContextProvider";

const CurrencyPopUp = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { currency } = useContext(CurrencyContext);

  const [loading, data, error] = useGetCurrencies<Currencies>();

  const [currencies, setCurrencies] = useState<Currency[] | undefined>([]);
  const [filterTerm, setFilterTerm] = useState<string>("");

  if (error) throw new Error("There was an error while loading currencies.");

  useEffect(() => {
    const filteredCurrencies = data?.data.currencies.filter((currency) =>
      currency.name.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setCurrencies(filteredCurrencies);
  }, [data?.data.currencies, filterTerm]);

  return (
    <>
      <div
        className="text-md px-2 my-auto rounded-full bg-indigo-500 text-white cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {currency.symbol}
      </div>
      {modalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[850px] bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-indigo-500 font-bold text-2xl ">
                    Choose your currency
                  </h3>
                  <XMarkIcon
                    width={35}
                    height={35}
                    className="hover:text-indigo-500 cursor-pointer"
                    onClick={() => setModalOpen(!modalOpen)}
                  />
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Find your currency"
                      onChange={(e) => setFilterTerm(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-wrap justify-start h-[400px] min-w-2/3 no-scrollbar overflow-y-scroll">
                    {currencies?.map((currency) => (
                      <CurrencyBlock
                        key={currency.uuid}
                        uuid={currency.uuid}
                        type={currency.type}
                        iconUrl={currency.iconUrl}
                        name={currency.name}
                        symbol={currency.symbol}
                        sign={currency.sign}
                        loading={loading}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CurrencyPopUp;
