type Props = {
  width?: number;
  height?: number;
};

const Loader = ({ width = 10, height = 10 }: Props) => {
  console.log(width, height);
  return (
    <div className="flex flex-row space-x-4 justify-center">
      <div className="rounded-full animate-spin border-8 border-solid border-indigo-500 border-t-transparent w-12 h-12 shadow-md"></div>
    </div>
  );
};

export default Loader;
