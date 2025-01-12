const Support = () => {
    return (
      <div className="py-10 px-5 lg:px-20 bg-light-background text-light-text">
        <h1 className="text-3xl font-bold text-center mb-5">Support Center</h1>
        <p className="text-center mb-10 text-lg">
          Need help? Our support team is here to assist you with any questions or issues. Explore our resources or reach out directly.
        </p>
  
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Frequently Asked Questions */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="bg-white shadow rounded-lg p-4">
                <summary className="cursor-pointer text-lg font-medium">
                  How can I donate to a campaign?
                </summary>
                <p className="mt-2 text-gray-700">
                  You can donate by visiting the campaign page, selecting your preferred amount, and completing the payment process.
                </p>
              </details>
              <details className="bg-white shadow rounded-lg p-4">
                <summary className="cursor-pointer text-lg font-medium">
                  What payment methods are accepted?
                </summary>
                <p className="mt-2 text-gray-700">
                  We accept credit cards, debit cards, and popular online payment methods like PayPal and Stripe.
                </p>
              </details>
              <details className="bg-white shadow rounded-lg p-4">
                <summary className="cursor-pointer text-lg font-medium">
                  Can I start my own campaign?
                </summary>
                <p className="mt-2 text-gray-700">
                  Yes, you can start your own campaign by signing up and submitting your campaign details for approval.
                </p>
              </details>
            </div>
          </div>
  
          {/* Contact Support */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
            <p className="mb-4">
              If you have further questions or need immediate assistance, please reach out to our support team.
            </p>
            <form className="bg-white shadow-lg rounded-lg p-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Support;
  