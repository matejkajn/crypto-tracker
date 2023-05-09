import { ReactNode } from "react";

type Props = {
  title?: string;
  value?: any;
  icon?: ReactNode;
  loading?: boolean;
};

const DashboardBlock = ({ title, value, icon, loading }: Props) => {
  return (
    <div
      className={
        loading
          ? "w-full lg:w-6/12 xl:w-4/12 p-2 animate-pulse"
          : "w-full lg:w-6/12 xl:w-4/12 p-2"
      }
    >
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto text-center p-5">
          <div className="relative content-center w-auto flex-initial my-2">
            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-indigo-500">
              {icon}
            </div>
          </div>
          <div className="relative w-full max-w-full flex-grow flex-1 my-2">
            <h5 className="font-medium">
              {!loading ? (
                <span className="font-semibold text-md text-gray-600">
                  {title}
                </span>
              ) : (
                <div className="h-3 bg-gray-200 rounded-full m-auto my-4 w-1/2"></div>
              )}
            </h5>
            {!loading ? (
              <span className="font-extrabold text-2xl text-blueGray-700">
                {value}
              </span>
            ) : (
              <div className="h-3 bg-gray-400 rounded-full m-auto my-2 w-2/3"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBlock;
