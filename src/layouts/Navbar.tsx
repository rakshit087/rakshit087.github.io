import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavMenuMobile } from "../components/NavMenuMobile";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed z-50 flex justify-between px-4 py-2 border-2 border-gray-700 rounded-full backdrop-blur-md right-8 top-8 ">
        <button
          className="p-1"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <IoMenu className="text-xl" />
        </button>
      </nav>
      <NavMenuMobile open={open} setOpen={setOpen} />
    </>
  );
};
