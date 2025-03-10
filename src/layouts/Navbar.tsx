import { useState } from "react";
import { NavMenu } from "../components/NavMenu";
import { NavMenuMobile } from "../components/NavMenuMobile";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="fixed z-50 flex justify-between max-w-3xl px-4 py-2 border-2 border-gray-700 rounded-full backdrop-blur-md right-8 top-8 lg:right-1/2 lg:translate-x-1/2 lg:w-full">
        <button
          className="p-1 lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Menu className="text-xl" />
        </button>
        <NavMenu />
      </nav>
      <NavMenuMobile open={open} setOpen={setOpen} />
    </>
  );
};
