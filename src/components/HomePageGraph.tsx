import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import Loader from "./Loader";

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  labels: string[];
  percentages: number[];
  loading: boolean;
};

const HomePageGraph = ({ labels, percentages, loading }: Props) => {
  const testData = {
    labels: labels,
    datasets: [
      {
        label: "Market % cap",
        data: percentages,
        backgroundColor: [
          "rgba(255, 140, 0, 1)",
          "rgba(232, 17, 35, 1)",
          "rgba(255, 241, 0, 1)",
          "rgba(236, 0, 140, 1)",
          "rgba(104, 33, 122, 1)",
          "rgba(0, 24, 143, 1)",
          "rgba(0, 188, 242, 1)",
          "rgba(0, 178, 148, 1)",
          "rgba(0, 158, 73, 1)",
          "rgba(186, 216, 10, 1)",
        ],
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
    options: {
      title: {
        display: true,
        fontsize: 14,
        text: "Total de Pedidos por Situação",
      },
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <>
      <div className="text-indigo-500 font-bold text-4xl text-center p-10">
        Market % cap
      </div>
      <div className="m-auto w-1/2 p-4">
        {loading ? (
          <Loader width={12} height={12} />
        ) : (
          <Pie
            data={testData}
            options={{
              plugins: {
                legend: { display: true, position: "bottom", fullSize: true },
              },
            }}
          />
        )}
      </div>
    </>
  );
};

export default HomePageGraph;
