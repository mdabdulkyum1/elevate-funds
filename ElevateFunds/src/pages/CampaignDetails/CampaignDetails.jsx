import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  const { user } = useContext(AuthContext);
  const campaign = useLoaderData();
  const { image, title, type, description, minimumDonation, deadline } =
    campaign;

    const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const dateOnly = currentDate.toISOString().split("T")[0];
    if (dateOnly >= deadline) {
      return Swal.fire({ title: "deadline is over" });
      
    }

    if(!user?.email){
     return navigate('/login')
    }

    const campaignInfo = {
      image,
      title,
      type,
      description,
      minimumDonation,
      deadline,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch("https://elevate-funds-server.vercel.app/donations", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(campaignInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({ title: "Donations success." });
        }
      });
  };



  const testimonials = [
    {
      name: "John Doe",
      message: "This platform has helped me contribute to so many meaningful causes. I feel really proud to be part of it!",
      image: "https://randomuser.me/api/portraits/men/1.jpg", // Example real image
      location: "New York, USA",
      date: "January 5, 2025"
    },
    {
      name: "Jane Smith",
      message: "Elevate Funds made my donation experience smooth and meaningful. It’s great to see how my contribution is making an impact.",
      image: "https://randomuser.me/api/portraits/women/1.jpg", // Example real image
      location: "London, UK",
      date: "December 22, 2024"
    }
  ];
  const faqs = [
    {
      question: "How can I contribute to a campaign?",
      answer: "You can contribute by visiting the campaign page and clicking on the 'Donate Now' button. Choose your preferred amount and payment method to complete the donation.",
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, all donations made through Elevate Funds are eligible for tax deductions. You will receive a tax receipt via email after your donation is processed.",
    },
    {
      question: "Can I support multiple campaigns at once?",
      answer: "Absolutely! You can contribute to as many campaigns as you like. Each campaign will have a separate donation form for easy processing.",
    },
    {
      question: "How do I know if my donation has been successfully received?",
      answer: "Once your donation is processed, you will receive a confirmation email with your donation details and receipt.",
    },
    {
      question: "Can I get a refund if I change my mind?",
      answer: "Donations are non-refundable. However, if there was an error in the process, please contact our support team for assistance.",
    }
  ];
  

  return (
    <div className="py-10 px-5 lg:px-20 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
    {/* Campaign Details Section */}
    <div className="flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
  
      <div className="w-full lg:w-1/2">
        <h1 className="text-2xl md:text-4xl font-bold text-primary mb-4">
          {campaign.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
          {campaign.description}
        </p>
        <div className="text-lg space-y-3">
          <p>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Campaign Type:
            </span>{" "}
            {campaign.type.charAt(0).toUpperCase() + campaign.type.slice(1)}
          </p>
          <p>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Minimum Donation:
            </span>{" "}
            ${campaign.minimumDonation}
          </p>
          <p>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Deadline:
            </span>{" "}
            {new Date(campaign.deadline).toLocaleDateString()}
          </p>
          <p>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Organizer:
            </span>{" "}
            {campaign.userName} ({campaign.userEmail})
          </p>
        </div>
      </div>
    </div>
  
    {/* Progress Tracker Section */}
    <div className="mt-10 bg-white dark:bg-dark-card rounded-lg shadow-md p-6">
      <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
        Campaign Progress
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Help us reach our goal of ${campaign.goalAmount}. Every contribution
        matters!
      </p>
      <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6">
        <div
          className="absolute top-0 left-0 h-6 rounded-full bg-primary"
          style={{
            width: `${(campaign.currentAmount / campaign.goalAmount) * 100}%`,
          }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
        <span>Raised: ${campaign.currentAmount}</span>
        <span>Goal: ${campaign.goalAmount}</span>
      </div>
    </div>
  
    {/* Support Campaign Section */}
    <div className="mt-10 bg-white dark:bg-dark-card rounded-lg shadow-md p-6">
      <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
        Support This Campaign
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Your contribution can make a big difference! Help us achieve our goal and
        support the cause.
      </p>
      <form onSubmit={handelSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="donationAmount"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Donation Amount
          </label>
          <input
            type="number"
            id="donationAmount"
            min={campaign.minimumDonation}
            defaultValue={campaign.minimumDonation}
            className="mt-1 block w-full px-4 py-2 bg-light-background dark:bg-dark-background border border-light-border dark:border-dark-border rounded-md text-gray-700 dark:text-gray-300 focus:ring-primary focus:border-primary"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition"
        >
          Donate Now
        </button>
      </form>
    </div>
  
  {/* Donor Testimonials Section */}
<div className="mt-10 bg-white dark:bg-dark-card rounded-lg shadow-md p-6">
  <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">
    Donor Testimonials
  </h2>
  <div className="space-y-6">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="flex items-start gap-4 border-l-4 border-primary pl-6 py-4">
        <img
          src={testimonial.image || "/default-avatar.png"} // Add default image or from testimonial object
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="text-gray-600 dark:text-gray-400 italic text-lg">
            {testimonial.message}
          </p>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            - {testimonial.name}
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.location} | {testimonial.date}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

{/* FAQ Section */}
<div className="mt-10 bg-white dark:bg-dark-card rounded-lg shadow-md p-6">
  <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
    Frequently Asked Questions
  </h2>
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <div key={index}>
        <p className="font-semibold text-gray-700 dark:text-gray-300">
          Q: {faq.question}
        </p>
        <p className="text-gray-600 dark:text-gray-400">A: {faq.answer}</p>
      </div>
    ))}
  </div>
</div>

    {/* Contact for Inquiries */}
    <div className="mt-10 bg-white dark:bg-dark-card rounded-lg shadow-md p-6">
      <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
        Contact for Inquiries
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        If you have any questions about this campaign, feel free to reach out to
        us.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Email:{" "}
        <a href={`mailto:${campaign.contactEmail}`} className="text-primary">
          {campaign.contactEmail}
        </a>
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        Phone: {campaign.contactPhone}
      </p>
    </div>
  </div>
  
  );
};

export default CampaignDetails;
