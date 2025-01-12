import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
  const updateCampaign = useLoaderData();
  const {
    _id,
    image,
    title,
    type,
    description,
    minimumDonation,
    deadline,
    userEmail,
    userName,
  } = updateCampaign;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const type = form.type.value;
    const description = form.description.value;
    const minimumDonation = parseFloat(form.minimumDonation.value);
    const deadline = form.deadline.value;

    const updateCampaignData = {
      image,
      title,
      type,
      description,
      minimumDonation,
      deadline,
    };

    fetch(`https://elevate-funds-server.vercel.app/updateCampaign/${_id}`, {
        method:"PUT",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(updateCampaignData)
    })
    .then(res=> res.json())
    .then(data=>{
        if(data.modifiedCount > 0){
            Swal.fire({
                title: "🎉 Updating Success!",
                text: "Your campaign details have been updated successfully.",
                icon: "success",
                iconColor: "#4CAF50",
                showConfirmButton: true,
                confirmButtonText: "Great!",
                confirmButtonColor: "#3085d6",
                background: "#f0f9ff",
                color: "#4CAF50",
                timer: 3000,
                timerProgressBar: true,
              });

        }
    })
  };
  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-primary mb-6">
        Update Campaign
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
            defaultValue={image}
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
            defaultValue={title}
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
            defaultValue={type}
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
            defaultValue={description}
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
            defaultValue={minimumDonation}
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
            defaultValue={deadline}
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
            value={userEmail}
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
            value={userName}
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
            Update Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCampaign;
