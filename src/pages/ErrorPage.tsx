import { NavLink, useNavigate } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <div className="flex flex-col text-center justify-center items-center h-[80vh]">
        <div className="text-indigo-500 font-bold text-7xl">404</div>

        <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
          This page does not exist
        </div>

        <div className="text-gray-500 font-medium text-sm md:text-xl lg:text-2xl mt-8">
          The page you are looking for could not be found.
        </div>
        <div className="flex">
          <div className="text-indigo-500 m-4 cursor-pointer underline">
            <NavLink to="/">Homepage</NavLink>
          </div>
          <div
            className="text-indigo-500 m-4 cursor-pointer underline"
            onClick={() => navigate(-1)}
          >
            Go back
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ErrorPage;
