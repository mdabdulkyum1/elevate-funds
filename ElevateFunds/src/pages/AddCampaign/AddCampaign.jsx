import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const userName = user?.displayName;
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    type: "",
    description: "",
    minimumDonation: "",
    deadline: "",
    userEmail: email,
    userName: userName,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { minimumDonation } = formData;
    const minimumDonationA = parseFloat(minimumDonation);
    const newCampaignData = { ...formData, minimumDonation: minimumDonationA };

    fetch("https://elevate-funds-server.vercel.app/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCampaignData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({ title: "Campaigns Added Success", icon: "success" });
        setFormData({image: "",
          title: "",
          type: "",
          description: "",
          minimumDonation: "",
          deadline: "",
          userEmail: email,
          userName: userName,});
        }

      });
  };

  return (
    <>
    <Helmet>
    <title>Add New Campaign | Elevate Funds </title>
    </Helmet>
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Add New Campaign
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image URL */}
        <div>
          <label className="block font-medium mb-2" htmlFor="image">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter image URL"
            required
          />
        </div>

        {/* Campaign Title */}
        <div>
          <label className="block font-medium mb-2" htmlFor="title">
            Campaign Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter campaign title"
            required
          />
        </div>

        {/* Campaign Type */}
        <div>
          <label className="block font-medium mb-2" htmlFor="type">
            Campaign Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="">Select Type</option>
            <option value="personal">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative">Creative Ideas</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            rows="5"
            placeholder="Describe your campaign"
            required
          />
        </div>

        {/* Minimum Donation Amount */}
        <div>
          <label className="block font-medium mb-2" htmlFor="minimumDonation">
            Minimum Donation Amount ($)
          </label>
          <input
            type="number"
            id="minimumDonation"
            name="minimumDonation"
            value={formData.minimumDonation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter minimum donation amount"
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="block font-medium mb-2" htmlFor="deadline">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        {/* User Email (Read Only) */}
        <div>
          <label className="block font-medium mb-2" htmlFor="userEmail">
            User Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            value={formData.userEmail}
            className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* User Name (Read Only) */}
        <div>
          <label className="block font-medium mb-2" htmlFor="userName">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white font-bold rounded-md hover:bg-opacity-90 transition"
          >
            Add Campaign
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default AddCampaign;
