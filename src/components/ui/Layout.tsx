import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import News from './News';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="text-gray-600 transition-all bg-white dark:bg-black dark:text-gray-300">
      <div className="container flex flex-col min-h-screen mx-4 lg:mx-auto max-w-7xl lg:px-8 ">
        <Navbar />
        <div className="flex justify-between divide-x prose-headings:font-semibold prose-h1:text-4xl prose-h4:font-semibold prose-em:text-red-600 prose-em:italic prose-h4:mb-2">
          <Sidebar />
          <div className="flex flex-1 p-4">
            <Outlet />
          </div>
          <News />
        </div>
      </div>
    </div>

  );
}

export default Layout;
