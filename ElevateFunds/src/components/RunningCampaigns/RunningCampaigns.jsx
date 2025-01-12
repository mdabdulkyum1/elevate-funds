import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaigns = () => {
  const [allCampaigns, setAllCampaigns] = useState([]);

  useEffect(() => {
    fetch("https://elevate-funds-server.vercel.app/allRunningCampaigns")
      .then((res) => res.json())
      .then((data) => setAllCampaigns(data));
  }, []);

  return (
    <div className="py-10 px-5 lg:px-20 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text" id="running">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-4xl text-primary font-bold mb-4">
          Running Campaigns
        </h2>
        <p className="text-lg">
          Explore our active campaigns and support the cause you care about.
        </p>
      </div>
      {!allCampaigns.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCampaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white dark:bg-dark-background border rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Type: {campaign.type}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Minimum Donation: ${campaign.minimumDonation}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                  {campaign.description.slice(0, 100)}...
                </p>
                <Link to={`campaign-details/${campaign._id}`}>
                  <button className="mt-4 py-2 px-4 bg-primary text-white rounded hover:bg-primary-dark">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RunningCampaigns;
