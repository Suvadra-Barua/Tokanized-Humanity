import { BiFile, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function ApplicationDetails() {
  return (
    <div className="md:flex ">
      <div className="w-full md:w-1/3">
        <div className="border-b-4 border-primary">
          <div className="overflow-hidden image">
            <img
              className="w-full h-auto max-w-xs mx-auto rounded-xl"
              src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
              alt=""
            />
          </div>
          <h3 className="my-1 text-lg font-bold leading-8 ">Jane Doe</h3>
          <p className="leading-6 text-semibold">isOwner at Her Company Inc.</p>
          <p className="text-sm leading-6 ">
            Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt

            Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
            Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt
          </p>
          <ul
            className="py-2 mt-3 divide-y rounded shadow-sm hover:shadow"
          >
            <li className="flex items-center py-3">
              <span>Status</span>
              <span className="ml-auto">
                <span
                  className="px-2 py-1 text-sm text-white rounded bg-primary"
                >
                  Pending
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
        <div className="px-3 pt-3 hover:shadow">
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
            <span>Pending Applicants</span>
          </div>
          <div className="grid grid-cols-3">
            <div className="mt-2 text-center">

              <Link to="/user/1">

                <img
                  className="w-16 h-16 mx-auto rounded-full"
                  src="https://cdn.australianageingagenda.com.au/wp-content/uploads/2015/06/28085920/Phil-Beckett-2-e1435107243361.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="mt-2 text-center">

              <Link to="/user/1">

                <img
                  className="w-16 h-16 mx-auto rounded-full"
                  src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="mt-2 text-center">

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
      <div className="w-full mx-2 md:w-9/12">

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

        <div className="mt-2" />

        <div className="p-3 rounded-sm shadow-sm">

          <div>
            <div className="flex items-center mb-3 space-x-2 font-semibold leading-8 ">
              <BiFile className="text-primary" size={24} />
              <span className="tracking-wide">Supported Documents</span>
            </div>
            <div className="flex flex-col justify-between h-full space-y-4">
              <div>

                <p className="font-medium text-gray-500">ID:</p>
                <img src="/document/nid.jpg" alt="" className="p-2 mt-2 border h-52 w-96" />
              </div>

              <div>
                <p className="font-medium text-gray-500">Passport:</p>
                <img src="/document/passport.jpg" alt="" className="p-2 mt-2 border h-52 w-96" />
              </div>

              <div>
                <p className="font-medium text-gray-500">Driving License:</p>
                <img src="/document/driving-license.jpg" alt="" className="p-2 mt-2 border h-52 w-96" />
              </div>

            </div>
          </div>

        </div>
        <div className="flex justify-end space-x-8">
          <button
            type="button"
            className="block w-full py-2 transition border rounded-full text-primary border-primary hover:bg-primary hover:text-white"
          >
            Reject
          </button>
          <button
            type="button"
            className="block w-full py-2 text-white transition rounded-full bg-primary hover:bg-secondary"
          >
            Approve
          </button>

        </div>
      </div>

    </div>

  );
}

export default ApplicationDetails;
