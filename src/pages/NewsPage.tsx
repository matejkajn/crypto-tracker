import NewsTable from "../components/NewsTable";
import BaseLayout from "../layouts/BaseLayout";

const NewsPage = () => {
  return (
    <BaseLayout>
      <h1 className="text-indigo-500 font-bold text-4xl text-center p-10">
        Latest Cryptocurrency News
      </h1>
      <div className="w-4/5 mx-auto">
        <NewsTable />
      </div>
    </BaseLayout>
  );
};

export default NewsPage;
