import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyCampaigns = () => {
  const [myAllCampaigns, setMyAllCampaigns] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://elevate-funds-server.vercel.app/myCampaigns?userEmail=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyAllCampaigns(data))
        .catch((error) => console.error("Error fetching campaigns:", error));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://elevate-funds-server.vercel.app/campaigns/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
              const remainingCampaigns = myAllCampaigns.filter(campaign=> campaign._id !== id);
              setMyAllCampaigns(remainingCampaigns);
            }
          });
      }
    });
  };

  return (
    <>
    <Helmet>
    <title>My Campaign | Elevate Funds </title>
    </Helmet>
    <div className="py-10 px-5 lg:px-20">
      <h1 className="text-2xl font-bold mb-5 text-center">My Campaigns</h1>
      {myAllCampaigns.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border border-gray-300 p-2">No</th>
                <th className="border border-gray-300 p-2">Image</th>
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Type</th>
                <th className="border border-gray-300 p-2">Minimum Donation</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myAllCampaigns.map((campaign, idx) => (
                <tr key={campaign._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">{idx + 1}</td>
                  <td className="border border-gray-300 p-2">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    {campaign.title}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {campaign.type}
                  </td>
                  <td className="border border-gray-300 p-2">
                    ${campaign.minimumDonation}
                  </td>
                  <td className="border border-gray-300 p-2 flex gap-2">
                    <Link to={`/updateCampaign/${campaign._id}`}>
                    <button
                      className="flex items-center gap-2 text-primary hover:text-blue-800"
                    >
                      Update<FaEdit />
                    </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(campaign._id)}
                      className="flex items-center gap-2 text-red-600 hover:text-red-800"
                    >
                     Delete <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">No campaigns found!</p>
      )}
    </div>
    </>
  );
};

export default MyCampaigns;
