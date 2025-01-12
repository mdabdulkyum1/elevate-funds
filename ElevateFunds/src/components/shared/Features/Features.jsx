import { FaBullhorn, FaHandshake, FaWallet, FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";

const Features = () => {
  return (
    <div className="py-10 px-5 lg:px-20 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text" id="how-it-works">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-4xl text-primary font-bold mb-4">Features of Crowdcube</h2>
        <p className="text-lg">
          Discover the powerful features that make Crowdcube the perfect
          platform for launching and supporting innovative ideas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="flex items-center gap-4 p-6 bg-base-300 dark:bg-dark-accent rounded-lg shadow-md">
          <FaBullhorn className="text-4xl" />
          <div>
            <h3 className="text-xl font-bold">Global Reach</h3>
            <p>Share your campaign with millions of backers worldwide.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4 p-6 bg-base-300 dark:bg-dark-accent rounded-lg shadow-md">
          <FaHandshake className="text-4xl " />
          <div>
            <h3 className="text-xl font-bold">Collaborative Support</h3>
            <p>
              Build relationships with investors and supporters to grow your
              vision.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-4 p-6 bg-base-300 dark:bg-dark-accent rounded-lg shadow-md">
          <FaWallet className="text-4xl " />
          <div>
            <h3 className="text-xl font-bold">Secure Payments</h3>
            <p>
              Enjoy safe and secure transactions for both backers and campaign
              owners.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center gap-4 p-6 bg-base-300 dark:bg-dark-accent rounded-lg shadow-md">
          <FaUsers className="text-4xl " />
          <div>
            <h3 className="text-xl font-bold">Community Building</h3>
            <p>
              Engage and grow your audience to build a lasting community around
              your idea.
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="flex items-center gap-4 p-6 bg-base-300 dark:bg-dark-accent rounded-lg shadow-md">
          <FaShieldAlt className="text-4xl " />
          <div>
            <h3 className="text-xl font-bold">Trusted Platform</h3>
            <p>
              Work with a platform known for its reliability and transparency.
            </p>
          </div>
        </div>

        {/* Feature 6 */}
        <div className="flex items-center gap-4 p-6 bg-base-300 dark:bg-dark-accent rounded-lg shadow-md">
          <FaChartLine className="text-4xl " />
          <div>
            <h3 className="text-xl font-bold">Analytics & Insights</h3>
            <p>
              Track your campaign performance and make data-driven decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
