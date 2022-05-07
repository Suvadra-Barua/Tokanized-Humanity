import { useContext } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { MainContext } from '../../providers/MainProvider';

function Navbar() {
  const { themeData } = useContext(MainContext);
  const [theme, setTheme] = themeData;

  const toggleColorMode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div
      className="sticky top-0 z-50 flex justify-between py-2 lg:mx-0"
      style={{
        backdropFilter: 'blur(2px)',
      }}
    >
      <Link className="flex items-center mr-3 space-x-2" to="/">

        <img src="/logo.png" alt="" className="w-10 h-10" />
        <h4 className="text-2xl font-black text-primary">
          Tokenized Humanity
        </h4>
      </Link>
      <div className="flex items-center">

        <button type="button" onClick={toggleColorMode} className="mr-4">
          {
           theme === 'light'
             ? (
               <BiMoon className="h-5 text-gray-400 transition duration-500 fill-current hover:text-gray-900" />
             ) : (
               <BiSun className="h-5 text-gray-400 transition duration-500 fill-current hover:text-white" />
             )
          }
        </button>
        <button
          className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
          type="button"
        >
          Sign In
        </button>
      </div>
    </div>

  );
}

export default Navbar;
