import { useLocation } from "react-router-dom";
import { useGetCoinHistory } from "../hooks/useGetCoinHistory";
import { CoinHistory, CoinHistoryGraphPoint } from "../types/types";
import { CurrencyContext } from "./CurrencyContextProvider";
import { useContext, useState, useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

type Props = {
  graphColor?: string;
};

const chartDays = [
  {
    label: "3 Hours",
    value: "3h",
  },
  {
    label: "24 Hours",
    value: "24h",
  },
  {
    label: "7 Days",
    value: "7d",
  },
  {
    label: "30 Days",
    value: "30d",
  },
  {
    label: "3 Months",
    value: "3m",
  },
  {
    label: "1 Year",
    value: "1y",
  },
  {
    label: "3 Years",
    value: "3y",
  },
  {
    label: "5 Years",
    value: "5y",
  },
];

const CoinHistoryGraph = ({ graphColor = "#000000" }: Props) => {
  const ref = useRef();
  const { state } = useLocation();
  const { currency } = useContext(CurrencyContext);

  const [timePeriod, setTimePeriod] = useState<string>(chartDays[5].value);

  const [loading, data, error] = useGetCoinHistory<CoinHistory>({
    uuid: state.uuid,
    timePeriod: timePeriod,
  });

  useEffect(() => {
    //TODO
  }, [timePeriod]);

  if (error)
    throw new Error("There was a problem while obtaining coin history data.");

  const graphData: CoinHistoryGraphPoint[] = [];
  for (const key in data?.data.history) {
    graphData.push({
      price: data?.data.history[parseInt(key)].price,
      timestamp: data?.data.history[parseInt(key)].timestamp,
    });
  }

  return (
    <>
      {false && (
        <div className="flex justify-center mx-auto my-5">
          <select
            id="selTimePeriod"
            className="bg-gray-50 border w-2/12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            defaultValue={timePeriod}
            onChange={(e) => {
              setTimePeriod(e.target.value);
            }}
          >
            ``
            {chartDays.map((day) => (
              <option key={day.value} value={day.value}>
                {day.label}
              </option>
            ))}
          </select>
        </div>
      )}
      <Line
        ref={ref}
        data={{
          labels: graphData.map((coin) => {
            const date = new Date(coin.timestamp * 1000);
            const time = `${date.getHours()}h:${date.getMinutes()}m`;
            return timePeriod === "24h" || timePeriod === "3h"
              ? date.toLocaleDateString() + " - " + time
              : date.toLocaleDateString();
          }),
          datasets: [
            {
              data: graphData.map((coin) => coin.price),
              label: `Price in ${currency.symbol}`,
              borderColor: graphColor,
            },
          ],
        }}
        options={{
          elements: {
            point: {
              radius: 2.5,
            },
          },
        }}
      />
    </>
  );
};

export default CoinHistoryGraph;
