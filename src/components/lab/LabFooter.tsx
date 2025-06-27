export default function LabFooter() {
  return (
    <footer className="py-2 mx-auto max-w-screen-xl px-6">
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <span className="text-sm font-normal text-inherit">&copy; 2025 Thoughtful AI Tools Lab, Calvin University</span>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="/about"
              className="text-sm font-normal text-inherit transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/publications"
              className="text-sm font-normal text-inherit transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Publications
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="text-sm font-normal text-inherit transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full text-center mt-2 text-xs text-gray-600">
        This material is based upon work supported by the <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2246145" className="underline text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">National Science Foundation under Grant No. 2246145</a>.
      </div>
    </footer>
  );
}
