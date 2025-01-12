import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Elevate Funds</title>
      </Helmet>
      <div className="bg-light-background text-light-text">
        {/* Hero Section */}
        <section className="text-center py-12 px-6 bg-gradient-to-r from-primary to-accent text-white">
          <h1 className="text-4xl font-bold mb-4">About Elevate Funds</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At Elevate Funds, we believe in empowering communities through the spirit of generosity and collaboration. 
            Together, we can create a meaningful impact in the world.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-12 px-6 lg:px-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">What Makes Us Unique</h2>
            <p className="text-gray-600">
              Elevate Funds offers a transparent, user-friendly, and impactful platform for your donations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Transparency"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Transparency</h3>
              <p className="text-gray-600">
                Know exactly where your donations go with detailed reports and updates.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Impact"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Impact</h3>
              <p className="text-gray-600">
                Every donation directly contributes to life-changing projects and causes.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Community"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                Join a network of generous donors and changemakers.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 px-6 bg-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">What Our Donors Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded">
              <p className="text-gray-600 italic">
                Elevate Funds helped me make a difference with ease. The transparency is unmatched!
              </p>
              <h4 className="mt-4 font-bold">- Jane Doe</h4>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
              <p className="text-gray-600 italic">
                The impact of my donations was clearly visible. Highly recommended!
              </p>
              <h4 className="mt-4 font-bold">- John Smith</h4>
            </div>
            <div className="bg-white shadow-md p-6 rounded">
              <p className="text-gray-600 italic">
                Being part of this platform feels like being part of something bigger.
              </p>
              <h4 className="mt-4 font-bold">- Sarah Lee</h4>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 px-6 lg:px-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary">Meet Our Team</h2>
            <p className="text-gray-600">
              Dedicated professionals passionate about making a difference.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">Alex Johnson</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">Emily Davis</h3>
              <p className="text-gray-600">Marketing Lead</p>
            </div>
            <div className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">Michael Lee</h3>
              <p className="text-gray-600">Operations Head</p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-12 px-6 bg-primary text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-6">
            Join us in creating a positive impact in the world, one donation at a time.
          </p>
          <button className="btn bg-accent py-2 px-6 rounded-lg">Get Started</button>
        </section>
      </div>
    </>
  );
};

export default About;
