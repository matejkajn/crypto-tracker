import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  createContext,
} from "react";
import { Currency } from "../types/types";

export interface CurrencyContextInterface {
  currency: Currency;
  setCurrency: Dispatch<SetStateAction<Currency>>;
}

const defaultState = {
  currency: {
    uuid: "5k-_VTxqtCEI",
    type: "fiat",
    iconUrl: "https://cdn.coinranking.com/fz3P5lsJY/eur.svg",
    name: "Euro",
    symbol: "EUR",
    sign: "€",
  },
  setCurrency: (currency: Currency) => {},
} as CurrencyContextInterface;

type Props = {
  children: ReactNode;
};

export const CurrencyContext = createContext(defaultState);

const CurrencyContextProvider = ({ children }: Props) => {
  const [currency, setCurrency] = useState<Currency>({
    uuid: "5k-_VTxqtCEI",
    type: "fiat",
    iconUrl: "https://cdn.coinranking.com/fz3P5lsJY/eur.svg",
    name: "Euro",
    symbol: "EUR",
    sign: "€",
  });

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyContextProvider;
