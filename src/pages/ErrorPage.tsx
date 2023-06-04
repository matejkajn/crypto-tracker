import {
  NavLink,
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

function errorMessage(error: unknown): string {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    return error.message;
  } else if (typeof error === "string") {
    return error;
  } else {
    console.error(error);
    return "Unknown error";
  }
}

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <div className="flex flex-col text-center justify-center items-center h-[calc(100vh-116px)]">
        <div className="text-indigo-500 font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl my-10">
          Uh oh! We've got a problem.
        </div>
        <div className=" font-bold text-5xl">{errorMessage(error)}</div>
        <div className="flex text-2xl my-8">
          <a className="font-semibold text-gray-500 dark:text-blue-500 hover:underline m-4 cursor-pointer">
            <NavLink to="/">Homepage</NavLink>
          </a>
          <a
            className="font-semibold text-gray-500 m-4 hover:underline cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Go back
          </a>
        </div>
      </div>
    </BaseLayout>
  );
};

export default ErrorPage;
