import { CoinNew } from "../types/types";

type Props = CoinNew & {
  loading: boolean;
};

const NewItem = ({ loading, ...props }: Props) => {
  return (
    <div className="mb-6 lg:mb-0">
      <div
        className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img src={props.thumbnail} className="w-full" alt="Louvre" />
        <a href={props.url} target="_blank">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]"></div>
        </a>
      </div>

      <h5 className="mb-3 text-lg font-bold">{props.title}</h5>
      <p className="mb-6 text-neutral-500 dark:text-neutral-600">
        <small>Created at {props.createdAt}</small>
      </p>
      <p>{props.description}</p>
    </div>
  );
};

export default NewItem;
