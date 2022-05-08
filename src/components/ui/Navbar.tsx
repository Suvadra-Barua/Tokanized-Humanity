import { Link, useNavigate } from 'react-router-dom';
import { role } from '../../utils';

function Navbar() {
  const navigate = useNavigate();

  //   const { themeData } = useContext(MainContext);
  //   const [theme, setTheme] = themeData;

  // const toggleColorMode = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }
  // };

  return (
    <div
      className="sticky top-0 z-50 flex justify-between py-2 lg:mx-0"
      style={{
        backdropFilter: 'blur(2px)',
      }}
    >
      <Link className="flex items-center mr-3 space-x-2" to="/">

        <img src="/Tokenized Humanity.png" alt="" className=" h-10" />

      </Link>
      <div className="flex items-center">

        {
             role() === 'dao' ? (

               <button
                 onClick={() => navigate('/applications')}
                 className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
                 type="button"
               >
                 Applications
               </button>
             )
               : (
                 <button
                   onClick={() => navigate('/create/campaign')}
                   className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
                   type="button"
                 >
                   Create a Campaign
                 </button>
               )
}

        <button
          onClick={() => navigate('/sign-up')}
          className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
          type="button"
        >
          Sign In
        </button>

        <button
          onClick={() => navigate('/sign-up')}
          className="block px-4 py-2 text-sm transition duration-500 rounded-full text-primary hover:bg-primary hover:text-white"
          type="button"
        >
          Connect Wallet
        </button>
      </div>
    </div>

  );
}

export default Navbar;
