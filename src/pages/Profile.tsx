import { BiFile, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="md:flex no-wrap md:-mx-2 ">
      <div className="w-full md:w-3/12 md:mx-2">
        <div className="p-3 border-b-4 border-primary">
          <div className="overflow-hidden image">
            <img
              className="w-full h-auto mx-auto rounded-xl"
              src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
              alt=""
            />
          </div>
          <h1 className="my-1 text-lg font-bold leading-8 ">Jane Doe</h1>
          <h3 className="leading-6 font-lg text-semibold">Owner at Her Company Inc.</h3>
          <p className="text-sm leading-6 ">
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt
          </p>
          <ul
            className="px-3 py-2 mt-3 divide-y rounded shadow-sm hover:shadow"
          >
            <li className="flex items-center py-3">
              <span>Status</span>
              <span className="ml-auto">
                <span
                  className="px-2 py-1 text-sm text-white rounded bg-primary"
                >
                  Active
                </span>
              </span>
            </li>
            <li className="flex items-center py-3">
              <span>Member since</span>
              <span className="ml-auto">Nov 07, 2016</span>
            </li>
          </ul>
        </div>
        <div className="my-4" />
        <div className="p-3 hover:shadow">
          <div className="flex items-center space-x-3 text-xl font-semibold leading-8 ">
            <span className="text-primary">
              <svg
                className="h-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
            <span>Similar Profiles</span>
          </div>
          <div className="grid grid-cols-3">
            <div className="my-2 text-center">

              <Link to="/user/1">

                <img
                  className="w-16 h-16 mx-auto rounded-full"
                  src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="my-2 text-center">

              <Link to="/user/1">

                <img
                  className="w-16 h-16 mx-auto rounded-full"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="my-2 text-center">

              <Link to="/user/1">

                <img
                  className="w-16 h-16 mx-auto rounded-full"
                  src="https://bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com/public/images/f04b52da-12f2-449f-b90c-5e4d5e2b1469_361x361.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-64 mx-2 md:w-9/12">

        <div className="p-3 rounded-sm shadow-sm">
          <div className="flex items-center space-x-2 font-semibold leading-8 ">
            <BiUser className="text-primary" size={24} />
            <span className="tracking-wide">About</span>
          </div>
          <div className="">
            <div className="grid text-sm md:grid-cols-2">
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">First Name</div>
                <div className="px-4 py-2">Jane</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Last Name</div>
                <div className="px-4 py-2">Doe</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Gender</div>
                <div className="px-4 py-2">Female</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Contact No.</div>
                <div className="px-4 py-2">+11 998001001</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Current Address</div>
                <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                  <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Birthday</div>
                <div className="px-4 py-2">Feb 06, 1998</div>
              </div>
            </div>
          </div>

        </div>

        <div className="my-4" />

        <div className="p-3 rounded-sm shadow-sm">

          <div>
            <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 ">
              <BiFile className="text-primary" size={24} />
              <span className="tracking-wide">Successful Projects</span>
            </div>
            <ul className="grid grid-cols-3 gap-2 list-inside">
              <li>
                <div className="p-2 transition duration-700 border-2 hover:bg-gray-500/5 hover:border-primary group rounded-xl">
                  <Link
                    className="space-y-1 "
                    to="/fund-request/1"
                  >
                    <img
                      className="object-fill w-full h-48 transition duration-700 group-hover:scale-105 rounded-xl"
                      src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                      alt=""
                    />
                    <h2 className="pt-2">Fundraiser For Archie</h2>
                    <p className="text-sm text-gray-600 truncate">
                      We have been saddened with the news that Archie Low
                      has been diagnosed with AML Leukemia and ha
                      We have been saddened with the news that Archie Low
                      has been diagnosed with AML Leukemia and ha
                      We have been saddened with the news that Archie Low
                      has been diagnosed with AML Leukemia and ha
                    </p>
                    <div className="text-xs font-bold">
                      <span className="text-primary">
                        $13,733 raised
                      </span>
                      ·
                      114 donations
                    </div>
                  </Link>
                </div>
              </li>

              <li>
                <div className="p-2 transition duration-700 border-2 hover:bg-gray-500/5 hover:border-primary group rounded-xl">
                  <Link
                    className="space-y-1 "
                    to="/fund-request/1"
                  >
                    <img
                      className="object-fill w-full h-48 transition duration-700 group-hover:scale-105 rounded-xl"
                      src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                      alt=""
                    />
                    <h2 className="pt-2">Fundraiser For Archie</h2>
                    <p className="text-sm text-gray-600 truncate">
                      We have been saddened with the news that Archie Low
                      has been diagnosed with AML Leukemia and ha
                      We have been saddened with the news that Archie Low
                      has been diagnosed with AML Leukemia and ha
                      We have been saddened with the news that Archie Low
                      has been diagnosed with AML Leukemia and ha
                    </p>
                    <div className="text-xs font-bold">
                      <span className="text-primary">
                        $13,733 raised
                      </span>
                      ·
                      114 donations
                    </div>
                  </Link>
                </div>
              </li>

              <li>
                <div className="p-2 transition duration-700 border-2 hover:bg-gray-500/5 hover:border-primary group rounded-xl">
                  <Link
                    className="space-y-1 "
                    to="/fund-request/1"
                  >
                    <img
                      className="object-fill w-full h-48 transition duration-700 group-hover:scale-105 rounded-xl"
                      src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
                      alt=""
                    />
                    <h2 className="pt-2">Fundraiser For Archie</h2>
                    <p className="text-sm text-gray-600 truncate">
                      We have been saddened with the news that Archie Low
                      has been diagnosed with AML Leukemia and ha
                      We have been saddened with the news that Archie Low
                      has been diagnosed with AML Leukemia and ha
                      We have been saddened with the news that Archie Low
                      has been diagnosed with AML Leukemia and ha
                    </p>
                    <div className="text-xs font-bold">
                      <span className="text-primary">
                        $13,733 raised
                      </span>
                      ·
                      114 donations
                    </div>
                  </Link>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
