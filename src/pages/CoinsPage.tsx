import CoinsTable from "../components/CoinsTable";
import BaseLayout from "../layouts/BaseLayout";

const CoinsPage = () => {
  return (
    <BaseLayout>
      <h1 className="text-indigo-500 font-bold text-4xl text-center p-10">
        Today's Cryptocurrency Prices by Market Cap
      </h1>
      <div className="w-4/5 mx-auto">
        <CoinsTable />
      </div>
    </BaseLayout>
  );
};

export default CoinsPage;
