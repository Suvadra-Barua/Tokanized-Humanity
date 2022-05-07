import { Link } from 'react-router-dom';

function MembershipApplications() {
  return (

    <div className="space-y-4">
      <div>
        <h2 className="py-2 text-2xl font-bold">Pending</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 border rounded-xl">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" alt="Bonnie" />
            <h5 className="mb-1 text-xl font-medium text-center">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div className="flex mt-4 space-x-3 lg:mt-6">
              <Link
                to="/applications/1"
                className="px-4 py-1 text-white transition duration-500 rounded-full whitespace-nowrap bg-primary hover:bg-secondary"
              >
                View Application
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="py-2 text-2xl font-bold">Approved</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col items-center p-6 border rounded-xl">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" alt="Bonnie" />
            <h5 className="mb-1 text-xl font-medium text-center">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div className="flex mt-4 space-x-3 lg:mt-6">
              <Link
                to="/applications/1"
                className="px-4 py-1 text-white transition duration-500 rounded-full whitespace-nowrap bg-primary hover:bg-secondary"
              >
                View Application
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MembershipApplications;
