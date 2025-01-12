import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-background text-gray-800 dark:text-dark-text py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Elevate Funds Logo"
                className="h-10 w-10 mr-2 rounded-full"
              />
              <h3 className="text-2xl font-semibold text-primary dark:text-dark-accent">
                Elevate Funds
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Elevate Funds is a platform where dreams, startups, and causes come to life by connecting contributors with innovative ideas.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-dark-accent transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#running"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-dark-accent transition-colors"
                >
                  Start a Campaign
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-dark-accent transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-dark-accent transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-dark-accent transition-colors text-2xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-dark-accent transition-colors text-2xl"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-dark-accent transition-colors text-2xl"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; 2024 Elevate Funds. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-dark-accent transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-dark-accent transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
