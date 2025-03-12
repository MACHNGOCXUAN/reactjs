import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const DefaultLayout = (props) => {
  return (
    <div>
      <Header />
      <div className="content max-w-[1350px] mx-auto">{props.children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
