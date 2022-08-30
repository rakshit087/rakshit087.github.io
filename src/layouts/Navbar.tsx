import { IoMenu, IoUnlink } from 'react-icons/io5';

export const Navbar = () => {
  return (
    <nav className="fixed z-50 flex justify-between w-5/6 px-4 py-2 -translate-x-1/2 border-2 border-gray-700 rounded-full top-8 left-1/2 backdrop-blur-md">
      <button className="p-1 ">
        <IoMenu className="text-xl" />
      </button>
      <button className="p-1">
        <IoUnlink className="text-xl" />
      </button>
    </nav>
  );
};
