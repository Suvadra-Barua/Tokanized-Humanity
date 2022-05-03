function HomeFeed() {
  return (

    <div className="w-full py-2 pt-4 border-t border-[#aaa]">
      <div className="flex">
        <div className="flex-shrink-0">
          <img
            className="rounded-full w-14 h-14"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt=""
          />
        </div>
        <div className="w-full ml-2">
          <div className="text-sm">
            <a
              href="/user/profile"
              className="font-bold text-gray-800 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-300"
            >
              Jhon Doe
            </a>
            <span className="mr-1 text-gray-600">
                &nbsp; @jhondoe
            </span>
            <span className="mr-1 text-gray-600">
              2h
            </span>
          </div>
          <div className="w-full pt-2 space-y-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <img
              src="https://images.unsplash.com/photo-1507427100689-2bf8574e32d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="w-full rounded-lg"
            />
          </div>
          <div>
            sponsors
          </div>
        </div>

      </div>

    </div>
  );
}

export default HomeFeed;
