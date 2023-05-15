import { Link, NavLink } from "react-router-dom";
import CurrencyPopUp from "./CurrencyPopUp";

const Navbar = () => {
  return (
    <nav className="w-full px-[5%] m-auto flex items-center justify-between shadow-md">
      <div className="p-2 font-extrabold">
        <Link to="/">
          <h1 className="text-3xl">CryptoTracker</h1>
        </Link>
      </div>
      <ul className="flex font-semibold">
        <li className="text-xl m-4 hover:text-indigo-500 cursor-pointer">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-xl m-4 hover:text-indigo-500 cursor-pointer">
          <NavLink to="/coins">Coins</NavLink>
        </li>
        <li className="text-xl m-4 hover:text-indigo-500 cursor-pointer">
          <NavLink to="/news">News</NavLink>
        </li>
        <li className="text-xl m-4 hover:text-indigo-500 cursor-pointer">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="items-center flex">
          <CurrencyPopUp />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
