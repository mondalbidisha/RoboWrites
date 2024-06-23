import { Link } from 'react-router-dom';
import BackgroundVideo from "./../assets/background-video.mp4";
import GradualSpacing from './magic-ui/gradual-spacing';

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-hidden flex flex-col justify-center items-center text-white">
        <div className="min-h-screen w-full">
          <video autoPlay loop muted id="background-video">
            <source src={BackgroundVideo} type="video/mp4" />
          </video>
            <div className="flex flex-col self-center px-20 text-white font-extrabold text-7xl pt-[40vh] mb-10">
              Unveiling the Future of Tech
            </div>
            <div className="flex flex-col self-center px-20 text-white font-medium text-5xl mb-10">
              <GradualSpacing
                className="text-5xl font-medium tracking-[-0.1em]"
                text="One Byte at a Time !!"
              />
            </div>
            <div className="flex flex-col self-center px-20 text-white mb-10">
              <Link
                to="/blogs">
                <span className="homepage-button">
                  <span className="homepage-button-background"></span>
                  <span className="homepage-button-text">Start Reading</span>
                </span>
              </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;