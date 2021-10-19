export const PageNotFound = () => (
  <div className="bg-white h-screen flex flex-col lg:relative">
    <div className="flex-grow flex flex-col">
      <main className="flex-grow flex flex-col bg-gray-900">
        <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 my-auto py-16 sm:py-32">
            <p className="text-4xl font-semibold text-white uppercase tracking-wide">
              404 error
            </p>
            <h1 className="mt-2 font-extrabold text-white tracking-tight sm:text-5xl">
              Page not found
            </h1>
            <p className="mt-2 text-xl text-base text-gray-200">
              We can't seem to find the page you’re looking for.
            </p>
            <div className="mt-6">
              <a
                href="/"
                className="text-base font-medium text-white hover:text-gray-500"
              >
                Go back to home page<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://media.vanityfair.com/photos/59a3395abab3e1306a96a907/master/pass/littlefinger-dead-dies-game-of-thrones.jpg"
        alt=""
      />
    </div>
  </div>
);
