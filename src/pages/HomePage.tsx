import Dashboard from "../components/Dashboard";
import BaseLayout from "../layouts/BaseLayout";

const HomePage = () => {
  return (
    <BaseLayout>
      <div className="mx-auto my-5 flex">
        <img src="/src/assets/logo.png" width={600} />
        <h1 className="font-bold text-6xl text-right justify-start p-10">
          Welcome to my CryptoTracker app.
        </h1>
      </div>
      <div className="w-3/4 m-auto">
        <Dashboard />
      </div>
    </BaseLayout>
  );
};

export default HomePage;
