import Dashboard from "../components/Dashboard";
import BaseLayout from "../layouts/BaseLayout";

const HomePage = () => {
  return (
    <BaseLayout>
      <div className="w-3/4 m-auto">
        <Dashboard />
      </div>
    </BaseLayout>
  );
};

export default HomePage;
