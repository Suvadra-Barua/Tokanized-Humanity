import { Link } from 'react-router-dom';
import campaignData from '../../../utils/data/campaignData';

function HomeFeed() {
  return (
    <div>
      <h2 className="pb-2 text-2xl font-bold">Updates</h2>

      {

    campaignData.map((campaign) => (
      <div key={campaign.id} className="w-full py-2 mb-4">
        <div className="flex">
          <Link
            to={`/user/${campaign.creatorData.id}`}
          >
            <div className="flex-shrink-0">
              <img
                className="rounded-full w-14 h-14"
                src={campaign.creatorData.profilePicture}
                alt=""
              />
            </div>
          </Link>

          <div className="w-full ml-2 rounded-xl">
            <div className="text-sm">
              <Link
                to={`/user/${campaign.creatorData.id}`}
                className="font-bold text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300"
              >
                {campaign.creatorData.name}
              </Link>
              <span className="mr-1 text-secondary">
                &nbsp;
                {' '}
                {campaign.creatorData.email}
              </span>
              <span className="mr-1 text-gray-600">
                {
                campaign.createdAt
              }
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
              {
                campaign.comments.map((comment) => (
                  <div key={comment.id} className="pt-4 space-y-4">
                    <div className="flex items-center rounded-full">
                      <div className="flex flex-shrink-0">
                        <img
                          className="w-8 h-8 mr-2 rounded-full"
                          src={comment.createdBy.profilePicture}
                          alt=""
                        />
                      </div>
                      <p className="text-sm opacity-80">{comment.comment}</p>
                    </div>

                  </div>
                ))
              }

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
