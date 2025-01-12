import faq from "../../../assets/faqs.jpg";
const Faq = () => {
  return (
    <div className="py-10 px-5 lg:px-20 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text" id="faq">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4 text-primary">FAQ</h2>
        <p className="text-lg">
          Find answers to the most common questions about our crowdfunding
          platform. Learn how it works and how you can get started today.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="space-y-4">
          <div className="collapse collapse-plus bg-base-300 dark:bg-dark-accent rounded-lg">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-lg font-medium">
              What is Crowdfunding?
            </div>
            <div className="collapse-content">
              <p className="py-2">
                Crowdfunding is a way of raising funds by collecting small
                contributions from a large group of people.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-300 dark:bg-dark-accent rounded-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium">
              How can I start a campaign?
            </div>
            <div className="collapse-content">
              <p className="py-2">
                You can start a campaign by signing up, filling out details
                about your project, and setting funding goals.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-300 dark:bg-dark-accent rounded-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium">
              What are the fees for using this platform?
            </div>
            <div className="collapse-content">
              <p className="py-2">
                Our platform charges a small percentage of the funds raised as
                service fees.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-300 dark:bg-dark-accent rounded-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium">
              Is there a limit to how much I can raise?
            </div>
            <div className="collapse-content">
              <p className="py-2">
                No, there is no upper limit to the amount you can raise on our
                platform.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-300 dark:bg-dark-accent rounded-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium">
              Can I edit my campaign after publishing?
            </div>
            <div className="collapse-content">
              <p className="py-2">
                Yes, you can edit your campaign details, but certain fields may
                be restricted once it goes live.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-300 dark:bg-dark-accent rounded-lg">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium">
              How will I receive the funds?
            </div>
            <div className="collapse-content">
              <p className="py-2">
                Funds will be transferred to your provided bank account once the
                campaign ends and meets its goal.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={faq}
            alt="FAQ Illustration"
            className="rounded-lg object-cover shadow-lg max-w-full lg:max-w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;