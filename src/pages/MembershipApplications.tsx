import { Link } from 'react-router-dom';
import applicationData from '../utils/data/applicationData';
import campaignCreatorData from '../utils/data/campaignCreatorData';

function MembershipApplications() {
  return (

    <div className="space-y-4">
      <div>
        <h2 className="py-2 text-2xl font-bold">Pending</h2>
        <div className="grid grid-cols-4 gap-6">

          {
            applicationData.map((pendingMember) => (

              <div key={pendingMember.id} className="flex flex-col items-center p-6 border rounded-xl">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={
                    pendingMember.image
                  }
                  alt={pendingMember.name}
                />
                <h5 className="mb-1 text-xl font-medium text-center">{pendingMember.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{pendingMember.profession}</span>
                <div className="flex mt-4 space-x-3 lg:mt-6">
                  <Link
                    to={`/applications/${pendingMember.id}`}
                    className="px-4 py-1 text-white transition duration-500 rounded-full whitespace-nowrap bg-primary hover:bg-secondary"
                  >
                    View Application
                  </Link>
                </div>
              </div>
            ))
          }

        </div>
      </div>
      <div>
        <h2 className="py-2 text-2xl font-bold">Approved</h2>
        <div className="grid grid-cols-4 gap-6">
          {
            campaignCreatorData.map((approvedMember) => (

              <div key={approvedMember.id} className="flex flex-col items-center p-6 border rounded-xl">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={
                    approvedMember.profilePicture
                  }
                  alt={approvedMember.name}
                />
                <h5 className="mb-1 text-xl font-medium text-center">{approvedMember.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{approvedMember.profession}</span>
                <div className="flex mt-4 space-x-3 lg:mt-6">
                  <Link
                    to={`/user/${approvedMember.id}`}
                    className="px-4 py-1 text-white transition duration-500 rounded-full whitespace-nowrap bg-primary hover:bg-secondary"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default MembershipApplications;
