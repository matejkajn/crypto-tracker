import { useGeneralStats } from "../hooks/useGeneralStats";

import { GeneralStats } from "../types/types";

import DashboardBlock from "./DashboardBlock";

import { CircleStackIcon } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { BanknotesIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/solid";

import millify from "millify";

const Dashboard = () => {
  const [loading, data, error] = useGeneralStats<GeneralStats>();

  if (error) return <div>Nějaký error</div>;

  let sumMarketCap = 0;

  for (const key in data?.data.total_market_cap) {
    sumMarketCap = sumMarketCap + data?.data.total_market_cap[key];
  }

  return (
    <div className="m-5">
      <div className="text-indigo-500 font-bold text-4xl text-center p-10">
        General crypto stats
      </div>
      <div className="flex flex-wrap">
        <DashboardBlock
          title="Active Cryptos"
          value={data?.data?.active_cryptocurrencies}
          icon={<CircleStackIcon />}
          loading={loading}
        />
        <DashboardBlock
          title="Markets"
          value={data?.data?.markets}
          icon={<ShoppingBagIcon />}
          loading={loading}
        />
        <DashboardBlock
          title="Market Cap"
          value={Math.round((sumMarketCap as number) / 1000000000)}
          icon={<BanknotesIcon />}
          loading={loading}
        />
        <DashboardBlock
          title="24h Vol"
          value={millify(
            data?.data?.market_cap_change_percentage_24h_usd as number,
            { precision: 6 }
          )}
          icon={<ClockIcon />}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Dashboard;
