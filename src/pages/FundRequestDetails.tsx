import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';

function FundRequestDetails() {
  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold">Emergency help to Support Lung Transplant</h2>
      <div className="flex justify-between w-full space-x-4">
        <img
          className="object-fill w-1/2 h-full rounded-xl"
          src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          alt=""
        />
        <div className="w-1/2 px-8 pt-4 shadow-lg rounded-xl">
          <div className="flex flex-col items-center justify-center w-full">
            <h2 className="font-bold">
              <span className="text-primary">
                $24,020 USD

              </span>
              <span className="ml-1 text-sm font-normal">
                raised of $52,000 goal
              </span>
            </h2>
            <p className="py-2 text-sm text-gray-500/80">163 donations</p>
          </div>

          <div className="relative w-full pt-4 space-y-4">
            <Menu>
              <Menu.Button className="block w-full py-2 text-white transition rounded-full bg-primary hover:bg-secondary">
                Donate

              </Menu.Button>
              <Menu.Items className="absolute rounded-xl left-3 w-96 bg-gray-50 dark:bg-gray-800">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${active && 'bg-blue-500'} block hover:bg-gray-500/10 p-2 w-full`}

                    >
                      Donate $10
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${active && 'bg-blue-500'} block hover:bg-gray-500/10 p-2 w-full`}

                    >
                      Donate $20
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="button"
                      className={`${active && 'bg-blue-500'} block hover:bg-gray-500/10 p-2 w-full`}
                    >
                      Donate $30
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <button
              className="block w-full py-2 transition border rounded-full text-primary border-primary hover:bg-primary hover:text-white"
              type="button"
            >
              Share
            </button>
          </div>

          <div className="py-4 space-y-3">

            <div className="flex items-center space-x-1">
              <img
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                alt=""
                className="flex flex-shrink-0 w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Name</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500/80">
                  <p>
                    Donated
                    <span className="pr-2 font-semibold border-r border-primary"> $100</span>
                  </p>

                  <p>2 Days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="flex items-center">
        <Link to="/user/1" className="flex-shrink-0">
          <img
            className="inline-block w-12 h-12 mr-4 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
        </Link>
        <div className="font-semibold ">
          <Link to="/user/1" className="text-secondary dark:text-primary">
            Miss Jane

          </Link>
          {' '}
          is organizing this fundraiser.
          <p className="mt-1 text-sm font-normal text-gray-500/60">
            Senior Software Engineer at Tero Labs LLC.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 text-gray-500/80">
        <p className="text-sm italic">
          Created April 26, 2022 at 12:00 AM
        </p>
        <div className="w-1 h-1 rounded bg-primary" />
        <p className="text-sm italic">
          Valid Until April 26, 2022 at 12:00 AM
        </p>
      </div>
      <p className="max-w-3xl leading-loose">
        As-salamu alaykum, dear brothers and sisters.

        My name is Mohammad Adnan (Sohel), and I&apos;m reaching out to you on behalf of a family that my family knows for a long time.

        Please take a few minutes out of your busy life and read the message below.  I am writing this letter to seek your kind support and generous help.

        In December of last year, a family of four came to Chicago from Dhaka as international students for better education, opportunities, and an overall better lifestyle.
      </p>
    </div>
  );
}

export default FundRequestDetails;
