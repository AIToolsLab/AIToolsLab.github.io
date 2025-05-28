import React from "react";
import {
  Typography,
  Button,
} from "@material-tailwind/react";

import ThemeProvider from "../theme-provider";

export default function LabHero() {
  return (
    <ThemeProvider>
      <section className="px-8 py-20 mx-auto max-w-screen-xl">
        <div className="container mx-auto text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mx-auto w-full text-5xl !leading-snug lg:max-w-3xl lg:text-6xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Thoughtful AI Tools Lab
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            We are a research group at Calvin University focused on how AI can help people think better.
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Contributing to a flourishing world requires thought.
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mt-8 mb-12 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            We build AI tools to support sustained goal-directed cognitive effort despite unclear goals and complex situations.
          </Typography>
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
            <Button 
              size="lg" 
              className="w-full lg:w-auto"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <a href="/publications">View Our Publications</a>
            </Button>
            <Button 
              variant="outlined" 
              size="lg" 
              className="w-full lg:w-auto"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <a href="/projects">Explore Projects</a>
            </Button>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}
