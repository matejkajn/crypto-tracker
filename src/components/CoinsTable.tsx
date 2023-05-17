import { useContext, useEffect, useState } from "react";
import { useGetCoins } from "../hooks/useGetCoins";
import { Coins } from "../types/types";
import ReactPaginate from "react-paginate";

const CoinsTable = () => {
  const [loading, data, error] = useGetCoins<Coins>({});
  const [pageNumber, setPagerNumber] = useState(0);

  if (error) throw new Error("There was a problem while obtaining coins data.");

  if (loading) return <div>loading</div>;

  const coinsPerPage = 15;
  const pagesVisited = pageNumber * coinsPerPage;

  const coins = data?.data.coins.slice(0, 300);
  const displayCoins = coins?.slice(pagesVisited, pagesVisited + coinsPerPage);

  const pageCount = Math.ceil((coins?.length as number) / coinsPerPage);

  const changePage = ({ selected }) => {
    setPagerNumber(selected);
  };

  return (
    <div>
      {displayCoins?.map((coin) => (
        <div>
          {coin.rank} {coin.name} {coin.price}
        </div>
      ))}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"flex w-[500px] mx-auto"}
        activeLinkClassName={"text-white bg-indigo-500"}
        pageLinkClassName={"p-2 m-1 rounded-md"}
      />
    </div>
  );
};

export default CoinsTable;
