

/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import BGPIC from '../../assets/Slider-Doctor/error_page.jpg';

const ErrorPage = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center bg-cover' style={{ backgroundImage: `url(${BGPIC})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className='text-center space-y-5 z-10 text-transparent bg-clip-text bg-gradient-to-l from-[#526d7c] to-[#0099ff]'>
        <h1 className='text-9xl font-extrabold'>404</h1>
        <h3 className='text-3xl font-semibold italic'>
          Sorry, we can't find where you want to go.
        </h3>
        <div className='mt-4'>
          <Link to={`/`} className="hover:text-white px-4 py-2 bg-transparent rounded hover:bg-[#6db2da] font-bold ">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
