import React from "react";
import {
  Typography,
} from "@material-tailwind/react";

import ThemeProvider from "../theme-provider";

export default function LabFooter() {
  return (
    <ThemeProvider>
      <footer className="py-2">
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
          <Typography 
            variant="small" 
            className="font-normal text-inherit"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            &copy; 2025 Thoughtful AI Tools Lab, Calvin University
          </Typography>
          <ul className="flex items-center gap-4">
            <li>
              <Typography
                as="a"
                href="/about"
                variant="small"
                className="font-normal text-inherit transition-colors hover:text-blue-500 focus:text-blue-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                About
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="/publications"
                variant="small"
                className="font-normal text-inherit transition-colors hover:text-blue-500 focus:text-blue-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Publications
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="/projects"
                variant="small"
                className="font-normal text-inherit transition-colors hover:text-blue-500 focus:text-blue-500"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
              >
                Projects
              </Typography>
            </li>
          </ul>
        </div>
      </footer>
    </ThemeProvider>
  );
}
