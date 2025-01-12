import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add functionality to send form data to the server or email
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-10 px-5 lg:px-20 bg-light-background text-light-text" id="contact">
      <h1 className="text-3xl font-bold text-center mb-5">Contact Us</h1>
      <p className="text-center mb-10 text-lg">
        Have questions or need assistance? Reach out to us, and we{"'"}ll get back
        to you as soon as possible.
      </p>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">
            Email us at{" "}
            <a
              href="mailto:support@elevatefunds.com"
              className="text-primary hover:underline"
            >
              support@elevatefunds.com
            </a>{" "}
            or call us at{" "}
            <a
              href="tel:+1234567890"
              className="text-primary hover:underline"
            >
              +123 456 7890
            </a>
            .
          </p>
          <p>
            Our office hours are Monday to Friday, 9 AM to 6 PM. We look forward
            to hearing from you!
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Our Address</h3>
            <p>123 Elevate Funds Street,</p>
            <p>City, State, ZIP Code</p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-6 space-y-5"
          >
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                placeholder="Your Message"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
