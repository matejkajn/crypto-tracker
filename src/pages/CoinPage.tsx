import { useLocation } from "react-router-dom";

const CoinPage = () => {
  const { state } = useLocation();

  return <div>{state.uuid}</div>;
};

export default CoinPage;
