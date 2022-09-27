// to define a general layout
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className=" bg-[#080d13] min-h-[92vh]">{children}</div>
    </>
  );
};
export default Layout;
