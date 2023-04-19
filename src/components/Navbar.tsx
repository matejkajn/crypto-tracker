import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full px-[5%] m-auto flex items-center justify-between shadow-md">
      <div className="p-2 font-extrabold">
        <h1 className="text-3xl">CryptoTracker</h1>
      </div>
      <ul className="flex font-semibold">
        <li className="text-xl m-4 hover:text-[#6188ff] cursor-pointer">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-xl m-4 hover:text-[#6188ff] cursor-pointer">
          <NavLink to="/coins">Coins</NavLink>
        </li>
        <li className="text-xl m-4 hover:text-[#6188ff] cursor-pointer">
          <NavLink to="/news">News</NavLink>
        </li>
        <li className="text-xl m-4 hover:text-[#6188ff] cursor-pointer">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
