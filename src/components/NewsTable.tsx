import { useGetNews } from "../hooks/useGetNews";
import { CoinNews } from "../types/types";
import Loader from "./Loader";
import NewItem from "./NewItem";

const NewsTable = () => {
  const [loading, data, error] = useGetNews<CoinNews>();

  if (error) throw new Error("There was a problem while obtaining news data.");

  const newsPerPage = 6;

  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
            {data?.data.map((item) => (
              <NewItem
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
      </div>
      {loading && <Loader />}
    </>
  );
};

export default NewsTable;
