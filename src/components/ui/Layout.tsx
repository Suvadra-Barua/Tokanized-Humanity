import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="text-gray-900 transition-all bg-white dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col max-w-5xl min-h-screen mx-4 lg:mx-auto lg:px-8 ">
        <Navbar />
        <div className="flex justify-between pt-4 divide-x prose-headings:font-semibold prose-h1:text-4xl prose-h4:font-semibold prose-em:text-red-600 prose-em:italic prose-h4:mb-2">
          <Outlet />
        </div>
      </div>
    </div>

  );
}

export default Layout;
