
const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
          Oops! The page you{`'`}re looking for doesn{`'`}t exist.
        </p>
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Back to Home
        </a>
      </div>
    </>
  );
};

export default ErrorPage;
