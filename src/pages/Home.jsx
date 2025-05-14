import img1 from '../assets/img-3.png';
import img2 from '../assets/img-4.png';
import img3 from '../assets/img-2.png';
import img4 from '../assets/img-1.png';
import img5 from '../assets/img-5.png';
import img6 from '../assets/img-6.png';
import img7 from '../assets/img-7.png';

import { FaClock, FaHandRock, FaUser } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container">
      <div className="intro">
        <div className="left-side">
          <h4 className="text-green">Students management platform </h4>
          <h1 className="font-bold text-gray">STUDENTSYNC MANAGEMENT WEB APP</h1>
          <h5 className="text-amber">Students for the Academic Year 2025/2026</h5>

          <div className="flex ">
            <button className="btn-outline-green text-green">Learn More</button>
            <button className="btn btn-green bg-green text-white">All students</button>
          </div>
        </div>

        <div className="right-side">
          <div>
            <img src={img1} />
          </div>
          <div className="h-b">
            <img src={img2} alt="" srcset="" />
          </div>
          <div className="h-b">
            <img src={img3} alt="" srcset="" />
          </div>
          <div className="h-b">
            <img src={img4} alt="" srcset="" />
          </div>
        </div>
      </div>

      <div className="culture">
        <h3 className="text-green">Vibrant Culture</h3>
        <h2 className="text-gray">The Gym College Students management</h2>
      </div>

      <div className="culture-content">
        <div className="culture-content1">
          <div className="culture-icon-title">
            <FaHandRock />
            <h4 className="text-back">Digital transformation</h4>
          </div>
          <p className="low-size-p">
            Digital transformation empowers stude learning environment where ethical digital
            citizenship and proper online conduct become the bedrock of their success in an
            increasingly connected world.
          </p>
        </div>
        <div className="culture-content1 culture-content-bgl-blue">
          <div className="culture-icon-title">
            <FaClock />
            <h4 className="text-white">Disciplined and Productive</h4>
          </div>
          <p className="low-size-p text-white">
            Discipline in time, as well as discipline in all matters and possessions. Organized and
            able to manage their agenda/activities so that all their time can be valuable and
            beneficial.
          </p>
        </div>
        <div className="culture-content1">
          <div className="culture-icon-title">
            <FaUser />
            <h4 className="text-black">Race Towards Goodness</h4>
          </div>
          <p className="low-size-p">
            Competing and striving in goodness. Having speed and accuracy in doing good deeds.
            Trained to act swiftly in matters, completing tasks quickly and efficiently.
          </p>
        </div>
      </div>

      <div className="gallery">
        <div className="culture">
          <h3 className="text-green">Gallery</h3>
          <h2 className="text-gray">The Gym College Students Lifestyle</h2>
        </div>

        <div className="culture">
          <ul className="flex gallery-link">
            <li>All</li>
            <li>Foundations period</li>
            <li>Sports culture</li>
            <li>Projects phase</li>
          </ul>
        </div>
        <div className="flex culture-content culture">
          <div className="h-b">
            <img src={img5} alt="" />
          </div>
          <div className="h-b ">
            <img src={img6} alt="" />
          </div>
          <div className="h-b">
            <img src={img7} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
