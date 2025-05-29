import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";


function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-medium text-sm text-gray-800">
        <a href="/" className="flex items-center hover:text-blue-500 transition-colors">Home</a>
      </li>
      <li className="p-1 font-medium text-sm text-gray-800">
        <a href="/publications" className="flex items-center hover:text-blue-500 transition-colors">Publications</a>
      </li>
      <li className="p-1 font-medium text-sm text-gray-800">
        <a href="/projects" className="flex items-center hover:text-blue-500 transition-colors">Projects</a>
      </li>
      <li className="p-1 font-medium text-sm text-gray-800">
        <a href="/about" className="flex items-center hover:text-blue-500 transition-colors">About</a>
      </li>
      <li className="p-1 font-medium text-sm text-gray-800">
        <a href="/vision" className="flex items-center hover:text-blue-500 transition-colors">Vision</a>
      </li>
    </ul>
  );
}


export default function LabHeader() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <header className="mx-auto max-w-screen-xl px-6 py-3 sticky top-0 z-40 border-0 backdrop-blur-md bg-white/75">
      <div className="flex items-center justify-between text-gray-900">
        <a href="/" className="mr-4 cursor-pointer py-1.5 font-bold text-xl hover:text-blue-500 transition-colors">
          Thoughtful AI Tools Lab
        </a>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <button
          className="ml-auto h-10 w-10 flex items-center justify-center text-gray-900 hover:bg-gray-100 rounded lg:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setOpenNav((v) => !v)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </button>
      </div>
      {openNav && (
        <nav className="mt-2 lg:hidden">
          <NavList />
        </nav>
      )}
    </header>
  );
}
