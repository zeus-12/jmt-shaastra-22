// to define a general layout
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <Link passHref href="/" className="hover:cursor-pointer ">
        <div className=" hover:cursor-pointer absolute -mt-3">
          <Image
            layout="fixed"
            width={"100"}
            height={"100"}
            src="/jmt-logo.png"
            alt="JMT Logo"
          />
        </div>
      </Link> */}
      <div className=" bg-[#080d13] min-h-[92vh]">{children}</div>
    </>
  );
};
export default Layout;
