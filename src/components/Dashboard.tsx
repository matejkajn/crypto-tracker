import { useGeneralStats } from "../hooks/useGeneralStats";

import { GeneralStats } from "../types/types";

import DashboardBlock from "./DashboardBlock";

import { CircleStackIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/solid";

import millify from "millify";

const Dashboard = () => {
  const [loading, data, error] = useGeneralStats<GeneralStats>();

  if (error) throw new Error("There was a problem while obtaining data.");

  return (
    <div className="m-5">
      <h1 className="text-indigo-500 font-bold text-4xl text-center p-10">
        General crypto stats
      </h1>
      <div className="flex flex-wrap justify-center">
        <DashboardBlock
          title="Total Coins"
          value={millify(data?.data.totalCoins as any, { precision: 5 })}
          icon={<CircleStackIcon />}
          loading={loading}
        />
        <DashboardBlock
          title="Total Markets"
          value={millify(data?.data.totalMarkets as any, { precision: 5 })}
          icon={<ShoppingBagIcon />}
          loading={loading}
        />
        <DashboardBlock
          title="Total Exchanges"
          value={millify(data?.data.totalExchanges as any, { precision: 5 })}
          icon={<ArrowsRightLeftIcon />}
          loading={loading}
        />
        <DashboardBlock
          title="Total Market Cap"
          value={millify(data?.data.totalMarketCap as any, { precision: 5 })}
          icon={<BanknotesIcon />}
          loading={loading}
        />
        <DashboardBlock
          title="Total 24h Volume"
          value={millify(data?.data.total24hVolume as any, { precision: 5 })}
          icon={<ClockIcon />}
          loading={loading}
        />
        {/* <DashboardBlock
          title="Market Cap"
          value={Math.round((sumMarketCap as number) / 1000000000)}
          icon={<BanknotesIcon />}
          loading={loading}
        />
         */}
      </div>
    </div>
  );
};

export default Dashboard;
