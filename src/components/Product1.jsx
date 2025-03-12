import { Link } from "react-router-dom";
import chefity from "../assets/image.png";
import { CiSaveUp2 } from "react-icons/ci";

const Product = () => {
  return (
    <Link to={"/subscribe"}>
      <div className="border rounded-lg">
        <div>
          <img src={chefity} alt="" className="rounded-lg w-full" />
        </div>
        <div className="flex gap-2 p-4">
          <h2 className="font-medium text-xl max-w-56">
            Cucumber sadad, cherry tomatoes
          </h2>
          <CiSaveUp2 className="w-10 h-8 border-2 border-gray-200 rounded-full p-1" />
        </div>
        <span className="bg-slate-200 rounded-full px-4 py-2 ms-4 mb-5 inline-block">
          32 Minutes
        </span>
      </div>
    </Link>
  );
};

export default Product;
