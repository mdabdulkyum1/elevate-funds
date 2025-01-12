import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const MyDonations = () => {
  const [myAllDonations, setMyAllDonations] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://elevate-funds-server.vercel.app/myDonations?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyAllDonations(data));
    }
  }, [user]);

  return (
    <>
    <Helmet>
    <title>My Donations | Elevate Funds </title>
    </Helmet>
    <div className="py-10 px-5 lg:px-20 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <h1 className="text-2xl font-bold text-center mb-8">
        My Donations
      </h1>

      {myAllDonations.length === 0 ? (
        <p className="text-center text-gray-500">No donations found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myAllDonations.map((donation) => (
            <div
              key={donation._id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={donation.image}
                alt={donation.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {donation.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {donation.description.slice(0, 100)}...
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Min Donation: ${donation.minimumDonation}
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Deadline: {new Date(donation.deadline).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default MyDonations;
