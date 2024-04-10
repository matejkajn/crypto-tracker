import { useState } from "react";
import { useGetNews } from "../hooks/useGetNews";
import { CoinNews } from "../types/types";
import Loader from "./Loader";
import NewItem from "./NewItem";

const NewsTable = () => {
  const [loading, data, error] = useGetNews<CoinNews>();

  if (error) throw new Error("There was a problem while obtaining news data.");

  const [newsOnPage, setNewsOnPage] = useState<number>(6);
  const loadMore = () => {
    setNewsOnPage(newsOnPage + 6);
  };

  const parsedData = data?.data.slice(0, newsOnPage);

  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            {parsedData?.map((item) => (
              <NewItem
                key={item.url}
                url={item.url}
                title={item.title}
                description={item.description}
                thumbnail={item.thumbnail}
                createdAt={item.createdAt}
                loading={loading}
              />
            ))}
          </div>
        </section>
        {data?.data.length != parsedData?.length && (
          <div className="text-center">
            <button
              type="button"
              onClick={loadMore}
              className="text-white bg-indigo-500 hover:bg-indigo-800 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
            >
              Load more
            </button>
          </div>
        )}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default NewsTable;
