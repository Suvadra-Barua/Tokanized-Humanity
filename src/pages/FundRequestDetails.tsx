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
        <div className="flex flex-col items-center w-1/2 px-8 pt-4 shadow-lg rounded-xl">
          <h2 className="font-bold text-primary">
            $24,020 USD
            <span className="ml-2 text-sm font-normal">
              raised of $52,000 goal
            </span>
          </h2>
          <p className="py-2 text-sm">163 donations</p>
          <div className="w-full pt-4 space-y-2">
            <button
              className="block w-full py-2 text-white transition bg-primary rounded-full hover:bg-secondary"
              type="button"
            >
              Donate
            </button>
            <button
              className="block w-full py-2 text-primary transition border border-primary rounded-full hover:bg-primary hover:text-white"
              type="button"
            >
              Share
            </button>
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
        <span className="text-sm font-semibold">
          Miss Jane is organizing this fundraiser.
        </span>
      </div>
      <p className="text-sm italic">
        Created April 26, 2022
      </p>
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
