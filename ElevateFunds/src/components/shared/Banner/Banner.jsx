// Import Swiper React components
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
   
      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[70vh] bg-[url('assets/Empower-Your-Ideas.jpg')]">
          <div className="hero-overlay bg-opacity-60"></div>

          <div className="hero-content">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-white dark:text-dark-accent">
                Empower Your Ideas{" "}
                <Typewriter
                  words={[
                    "into Innovations",
                    "into Opportunities",
                    "into Success Stories",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </h1>
              <p className="py-6 text-white dark:text-gray-200">
                Transform your innovative ideas into reality with the support of
                our vibrant community. Share your vision and watch it come to
                life.
              </p>
              <button className="btn bg-primary text-white hover:bg-accent">
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[70vh] bg-[url('assets/Elevate-Communities.jpeg')]">
          <div className="hero-overlay bg-opacity-60"></div>

          <div className="hero-content">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-white dark:text-dark-accent">
                Elevate Communities
              </h1>
              <p className="py-6 text-white dark:text-gray-200">
                Join forces with others to bring impactful projects to life.
                Your contributions make a difference in building a brighter
                future.
              </p>
              <button className="btn bg-primary text-white hover:bg-accent">
                Discover Campaigns
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero bg-base-200 dark:bg-dark-background min-h-[70vh] bg-[url('assets/fuel.jpeg')]">
          <div className="hero-overlay bg-opacity-60"></div>

          <div className="hero-content">
            <div>
              <h1 className="text-2xl md:text-5xl font-bold text-white dark:text-dark-accent">
                Fuel Innovation
              </h1>
              <p className="py-6 text-white dark:text-gray-200">
                Support groundbreaking ideas and startups. Be a part of the
                innovation that shapes the world of tomorrow.
              </p>
              <button className="btn bg-primary text-white hover:bg-accent">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
