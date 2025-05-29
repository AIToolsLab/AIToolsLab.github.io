export default function LabFooter() {
  return (
    <footer className="py-2">
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
    </footer>
  );
}
