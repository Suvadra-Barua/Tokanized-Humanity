import { Link } from 'react-router-dom';

function HomeFeed() {
  return (
    <div>
      <h2 className="pb-2 text-2xl font-bold">Updates</h2>

      {
    [1, 2, 3, 4].map((index) => (
      <div key={index} className="w-full py-2 mb-4">
        <div className="flex ">
          <div className="flex-shrink-0">
            <img
              className="rounded-full w-14 h-14"
              src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
              alt=""
            />
          </div>
          <div className="w-full ml-2 rounded-xl">
            <div className="text-sm">
              <Link
                to="/user/profile"
                className="font-bold text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300"
              >
                Jhon Doe
              </Link>
              <span className="mr-1 text-secondary">
                &nbsp; @jhondoe
              </span>
              <span className="mr-1 text-gray-600">
                2h
              </span>
            </div>

            <div className="px-4 py-2 mt-2 rounded-xl">
              <div className="space-y-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <img
                  src="https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt=""
                  className="max-w-xs overflow-y-auto rounded-lg lg:w-full h-96"
                />
              </div>
              <div className="pt-4 space-y-4">
                <div className="flex items-center rounded-full">
                  <div className="flex flex-shrink-0">
                    <img
                      className="w-8 h-8 mr-2 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                      alt=""
                    />
                  </div>
                  <p className="text-sm opacity-80">blah blah</p>
                </div>

                <div className="flex items-center rounded-full">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 mr-2 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                      alt=""
                    />
                  </div>
                  <p className="text-sm opacity-70">blah blah</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    ))
  }
    </div>
  );
}

export default HomeFeed;
