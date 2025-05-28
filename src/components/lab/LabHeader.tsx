import React from "react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Collapse, IconButton, Navbar, ThemeProvider, Typography } from "@material-tailwind/react";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-medium text-sm text-blue-gray-700">
        <a href="/" className="flex items-center hover:text-blue-500 transition-colors">
          Home
        </a>
      </li>
      <li className="p-1 font-medium text-sm text-blue-gray-700">
        <a href="/publications" className="flex items-center hover:text-blue-500 transition-colors">
          Publications
        </a>
      </li>
      <li className="p-1 font-medium text-sm text-blue-gray-700">
        <a href="/projects" className="flex items-center hover:text-blue-500 transition-colors">
          Projects
        </a>
      </li>
      <li className="p-1 font-medium text-sm text-blue-gray-700">
        <a href="/about" className="flex items-center hover:text-blue-500 transition-colors">
          About
        </a>
      </li>
      <li className="p-1 font-medium text-sm text-blue-gray-700">
        <a href="/vision" className="flex items-center hover:text-blue-500 transition-colors">
          Vision
        </a>
      </li>
    </ul>
  );
}

export default function LabHeader() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <ThemeProvider>
      <Navbar 
        className="mx-auto max-w-screen-xl px-6 py-3 sticky top-0 z-40 border-0 backdrop-blur-md bg-white/75"
        placeholder=""
        onResize={() => {}}
        onResizeCapture={() => {}}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
            placeholder=""
            onResize={() => {}}
            onResizeCapture={() => {}}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Thoughtful AI Tools Lab
          </Typography>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <IconButton
                      variant="text"
                      className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                      ripple={false}
                      onClick={() => setOpenNav(!openNav)} placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
    </ThemeProvider>
  );
}
