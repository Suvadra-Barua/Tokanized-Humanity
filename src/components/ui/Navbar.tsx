import { useContext } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
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
      className="sticky top-0 flex justify-between py-2 border-b border-slate-900/10 dark:border-slate-300/10 lg:mx-0"
      style={{
        backdropFilter: 'blur(2px)',
      }}
    >
      <a className="mr-3" href="/">
        <h4 className="font-bold">
          Tokenized Humanity
        </h4>
      </a>
      <button type="button" onClick={toggleColorMode}>
        {
           theme === 'light'
             ? (
               <BiMoon className="h-5 text-gray-400 fill-current" />
             ) : (
               <BiSun className="h-5 text-gray-400 fill-current" />
             )
          }
      </button>
    </div>

  );
}

export default Navbar;
