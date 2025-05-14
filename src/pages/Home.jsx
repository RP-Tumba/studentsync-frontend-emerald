import img1 from '../assets/img-3.png';
import img2 from '../assets/img-4.png';
import img3 from '../assets/img-2.png';
import img4 from '../assets/img-1.png';

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

      <div className="culture"></div>

      <div className="gallery"></div>
    </div>
  );
};
export default Home;
