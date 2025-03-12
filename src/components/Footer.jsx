import { useEffect } from "react";
import logo from "../assets/logo.png";

const Footer = () => {

  

  return (
    <div className="w-full bg-black text-white">
      <footer className="p-10">
        <div className=" mx-auto flex justify-between">
          {/* About Us Section */}
          <div className="max-w-96">
            <h2 className="font-bold text-xl mb-4">About us</h2>
            <p className="text-gray-400 mb-4">
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-gray-800 text-gray-300 outline-none focus:ring focus:ring-yellow-500 flex-1"
              />
              <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600">
                Send
              </button>
            </div>
          </div>

          {/* Learn More Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">Learn More</h2>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-yellow-500 cursor-pointer">
                Our Cooks
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">
                See Our Features
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Shop and Recipes Section */}
          <div>
            <h2 className="font-bold text-xl mb-4">Shop</h2>
            <ul className="space-y-2 text-gray-400 mb-6">
              <li className="hover:text-yellow-500 cursor-pointer">
                Gift Subscription
              </li>
              <li className="hover:text-yellow-500 cursor-pointer">
                Send Us Feedback
              </li>
            </ul>
            <h2 className="font-bold text-xl mb-4">Recipes</h2>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-yellow-500 cursor-pointer">
                What to Cook This Week
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl m-auto border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-12 h-12" />
            <span>© 2023 Chetify Company</span>
          </div>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-500">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-500">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
