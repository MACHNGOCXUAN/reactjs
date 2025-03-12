import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // const navigate = useNavigate();

  // const handleSearch = (event) => {
  //   if (event.key === "Enter") {
  //     const query = event.target.value.trim();
  //     if (query) {
  //       navigate(`/filter?q=${encodeURIComponent(query)}`);
  //     }
  //   }
  // };

  return (
    <div className="border-b-2">
      <header className="max-w-[1400px] mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <img className="w-52" src={logo} alt="Logo" />
          </Link>
          <div className="h-full relative">
            <CiSearch className="absolute top-2.5 left-2 size-5" />
            <input
              className="px-3 ps-5 w-72 py-2 bg-slate-200 rounded-lg outline-none"
              type="text"
              placeholder="What would you like to cook?"
              // onKeyDown={handleSearch}
            />
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <ul className="flex gap-4">
            <li className="hover:text-gray-500 cursor-pointer">What to cook</li>
            <li className="hover:text-gray-500 cursor-pointer">Recipes</li>
            <li className="hover:text-gray-500 cursor-pointer">Ingredients</li>
            <li className="hover:text-gray-500 cursor-pointer">Occasions</li>
            <li className="hover:text-gray-500 cursor-pointer">About us</li>
          </ul>
          <ul className="flex gap-5 text-red-400 font-bold">
            <li className="cursor-pointer">Login</li>
            <li className="cursor-pointer">Register</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
