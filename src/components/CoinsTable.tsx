import { useState } from "react";
import { useGetCoins } from "../hooks/useGetCoins";
import { Coins, Coin } from "../types/types";
import ReactPaginate from "react-paginate";
import CoinsTableRow from "./CoinsTableRow";

const CoinsTable = () => {
  const [loading, data, error] = useGetCoins<Coins>({});

  if (error) throw new Error("There was a problem while obtaining coins data.");

  const [pagerNumber, setPagerNumber] = useState(0);

  const coinsPerPage = 15;
  const pagesVisited = pagerNumber * coinsPerPage;
  const coins = data?.data.coins.slice(0, 300) || [];
  const displayCoins = coins?.slice(pagesVisited, pagesVisited + coinsPerPage);
  const pageCount = Math.ceil((coins?.length || 0) / coinsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPagerNumber(selected);
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-2">
        <table className="w-full text-sm text-left  dark:text-gray-400">
          {!loading && (
            <thead className="text-xs bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  BTC Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Change
                </th>
              </tr>
            </thead>
          )}
          <tbody>
            {displayCoins?.map((coin) => (
              <CoinsTableRow
                key={coin.uuid}
                uuid={coin.uuid}
                symbol={coin.symbol}
                name={coin.name}
                color={coin.color}
                iconUrl={coin.iconUrl}
                marketCap={coin.marketCap}
                price={coin.price}
                listedAt={coin.listedAt}
                tier={coin.tier}
                change={coin.change}
                rank={coin.rank}
                sparkline={coin.sparkline}
                lowVolume={coin.lowVolume}
                coinrankingUrl={coin.coinrankingUrl}
                dayVolume={coin.dayVolume}
                btcPrice={coin.btcPrice}
                loading={loading}
              />
            ))}
          </tbody>
        </table>
      </div>
      {!loading && (
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"flex w-[500px] my-10 mx-auto justify-center"}
          activeLinkClassName={"text-white bg-indigo-500"}
          pageLinkClassName={"p-2 m-1 rounded-md"}
        />
      )}
    </>
  );
};

export default CoinsTable;
