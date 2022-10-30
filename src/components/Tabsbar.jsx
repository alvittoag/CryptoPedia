import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const TabsBar = () => {
  const [bar, setBar] = useState(0);
  const [mobile, setMobile] = useState(false);

  const handleBar = (props) => {
    setBar(props);
  };

  useEffect(() => {
    setBar(1);
  }, []);

  const handleMobile = () => {
    setMobile(!mobile);
  };
  return (
    <>
      {/* MD dan LG */}
      <div className="py-6 mt-3 px-9 hidden md:flex">
        <div className="flex mx-auto gap-12">
          <Link to={"/"}>
            <div
              onClick={() => handleBar(1)}
              className={
                bar === 1
                  ? "px-9 py-2 rounded-lg bg-primary ring-1 ring-gray-200 shadow-md"
                  : "px-9 py-2"
              }
            >
              <h1 className="font-semibold">Market Coin</h1>
            </div>
          </Link>

          <Link to={"/exchanges"}>
            <div
              onClick={() => handleBar(2)}
              className={
                bar === 2
                  ? "px-9 py-2 rounded-lg bg-primary ring-1 ring-gray-200 shadow-md"
                  : "px-9 py-2"
              }
            >
              <h1 className="font-semibold">Exchanges</h1>
            </div>
          </Link>

          <Link to={"/derivatives"}>
            <div
              onClick={() => handleBar(3)}
              className={
                bar === 3
                  ? "px-9 py-2 rounded-lg bg-primary ring-1 ring-gray-200 shadow-md"
                  : "px-9 py-2"
              }
            >
              <h1 className="font-semibold">Derivatives</h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="rounded-div mt-5 py-3 md:hidden">
        <div
          className={
            mobile
              ? "flex justify-center items-center gap-2 ease-in-out duration-500 -mt-3 py-3"
              : "flex justify-center items-center gap-2 ease-in-out duration-500 py-1"
          }
        >
          <div
            onClick={handleMobile}
            className="flex items-center gap-2 hover:cursor-pointer"
          >
            <h5 className="font-semibold">Menu</h5>
            <div>
              {mobile ? (
                <IoIosArrowUp className="text-xl mt-[2px]" />
              ) : (
                <IoIosArrowDown className="text-xl mt-[2px]" />
              )}
            </div>
          </div>
        </div>
        <div
          className={
            mobile
              ? "py-5 flex flex-col gap-5 font-semibold px-3 ease-in-out duration-500 border-t"
              : "hidden"
          }
        >
          <Link to={"/"}>
            <div
              onClick={() => handleBar(1)}
              className={
                bar === 1
                  ? "bg-primary w-32 text-center rounded-lg py-1 ring-1 ring-gray-200 shadow-md ease-in-out duration-500"
                  : "py-0"
              }
            >
              <h5>Market Table</h5>
            </div>
          </Link>

          <Link to={"/exchanges"}>
            <div
              onClick={() => handleBar(2)}
              className={
                bar === 2
                  ? "bg-primary w-32 text-center rounded-lg py-1 ring-1 ring-gray-200 shadow-md ease-in-out duration-500"
                  : "py-0"
              }
            >
              <h5>Exchanges</h5>
            </div>
          </Link>

          <Link to={"/derivatives"}>
            <div
              onClick={() => handleBar(3)}
              className={
                bar === 3
                  ? "bg-primary w-32 text-center rounded-lg py-1 ring-1 ring-gray-200 shadow-md ease-in-out duration-500"
                  : "py-0"
              }
            >
              <h5>Market Table</h5>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
