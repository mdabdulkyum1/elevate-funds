import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllCampaigns = () => {
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order

  useEffect(() => {
    fetch("https://elevate-funds-server.vercel.app/allCampaigns")
      .then((res) => res.json())
      .then((data) => {
        setAllCampaigns(data);
      });
  }, []);

  const handleSort = () => {
    const sortedCampaigns = [...allCampaigns].sort((a, b) => {
      return sortOrder === "asc"
        ? a.minimumDonation - b.minimumDonation
        : b.minimumDonation - a.minimumDonation;
    });

    setAllCampaigns(sortedCampaigns);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  return (
    <>
      <Helmet>
        <title>All Campaign | Elevate Funds </title>
      </Helmet>
      <div className="py-10 px-5 lg:px-20 bg-light-background text-light-text">
      <div className="flex flex-wrap justify-between items-center mb-5 gap-3">
  <h2 className="text-xl font-bold">All Campaigns</h2>
  <button
    className="btn bg-primary text-white py-2 px-4 rounded-lg text-sm md:text-base lg:px-6 lg:py-3"
    onClick={handleSort}
  >
    Sort by Minimum Donation ({sortOrder === "asc" ? "Ascending" : "Descending"})
  </button>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allCampaigns.length > 0 ? (
            allCampaigns.map((campaign) => (
              <div key={campaign._id} className="bg-white shadow-md rounded p-4">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-3">{campaign.title}</h3>
                <p className="text-sm text-gray-600">{campaign.type}</p>
                <p className="text-primary font-bold mt-2">
                  ${campaign.minimumDonation}
                </p>
                <p className="text-sm text-gray-500">
                  Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                </p>
                <Link
                  to={`/campaign-details/${campaign._id}`}
                  className="btn bg-primary btn-sm mt-3 text-center text-white flex"
                >
                  See More
                </Link>
              </div>
            ))
          ) : (
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-gray-200 rounded p-4 animate-pulse">
                <div className="h-40 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded mt-3"></div>
                <div className="h-4 bg-gray-300 rounded mt-2"></div>
                <div className="h-6 bg-gray-300 rounded mt-2"></div>
                <div className="h-4 bg-gray-300 rounded mt-2"></div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default AllCampaigns;
