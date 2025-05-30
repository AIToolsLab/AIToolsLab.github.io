export default function LabHero() {
  return (
    <section className="px-8 py-20 mx-auto max-w-screen-xl">
      <div className="container mx-auto text-center">
        <h1 className="mx-auto w-full text-5xl font-bold text-blue-gray-900 leading-snug lg:max-w-3xl lg:text-6xl">
          Thoughtful AI Tools Lab
        </h1>
        <p className="mx-auto mt-8 mb-4 w-full px-8 text-lg text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20">
          We are a research group at Calvin University focused on how AI can help people think better.
        </p>
        <p className="mx-auto mt-8 mb-4 w-full px-8 text-lg text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20">
          Contributing to a flourishing world requires thought.
        </p>
        <p className="mx-auto mt-8 mb-12 w-full px-8 text-lg text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20">
          We build AI tools to support sustained goal-directed cognitive effort despite unclear goals and complex situations.
        </p>
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          <a
            href="https://app.thoughtful-ai.com/"
            className="w-full lg:w-auto inline-block px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-center transition"
            role="button"
            tabIndex={0}
            target="_blank"
            rel="noopener noreferrer"
          >
            Try Our App
          </a>
          <a
            href="/projects"
            className="w-full lg:w-auto inline-block px-6 py-3 text-base font-medium text-blue-500 border border-blue-500 rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-center transition"
            role="button"
            tabIndex={0}
          >
            Explore Projects
          </a>
          <a
            href="/publications"
            className="w-full lg:w-auto inline-block px-6 py-3 text-base font-medium text-blue-500 border border-blue-500 rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 text-center transition"
            role="button"
            tabIndex={0}
          >
            View Our Publications
          </a>
        </div>
      </div>
    </section>
  );
}
