import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
function Home() {
  return (
    <>
      <div className='main w-full h-[93vh] bg-[url("https://img.freepik.com/free-photo/espresso-surrounded-by-scattered-coffee-beans-dark-surface_91128-4609.jpg?t=st=1709255583~exp=1709259183~hmac=18321b83d1eb3fdf2b07b30646ad988f81c89a61db45fbb6953e47f4552be80a&w=1380")] *: bg-no-repeat bg-cover bg-center flex justify-center items-center'>

        <div className='text  text-white  w-full h-screen px-6 flex justify-between items-center'>
          <div className='w-[50%] h-[50%]'>

          </div>
          <div className='w-[50%] h-[50%] flex justify-center gap-10 flex-col'>
          <h1 className=" text-xl font-normal">Cafe & Restaurant Est. 2035</h1>
          <h1 className=" text-7xl font-semibold">Your Go-to Spot for Delicious Eats & Coffee</h1>
          <div className='btn flex gap-10 items-center mt-10'>
            <button className='p-4 border-2 border-white hover:bg-[#003B25]'>Order online</button>
            <button className='p-4 border-2 border-white hover:bg-[#003B25]'>Our Menu</button>
          </div>
          </div>
        </div>
      </div>
      <div className='strip w-full h-[70px] flex items-center justify-center bg-[#60695D]'>
        <Carousel
        infiniteLoop
        autoPlay
        showStatus = {false}
        showArrows = {false}
        showThumbs = {false}
        showIndicators = {false}
        interval={3000}
        transitionTime={1000}
        swipeScrollTolerance={50}
        >
          <div className='text text-white text-lg font-light'> Weekend Brunch     I    Saturday 9am - 2pm </div>
          <div className='text text-white text-lg font-light'> Daily Deal    |   Coffee & Pastry $3.99 </div>
        </Carousel>

      </div>

      <div className='w-full h-screen bg-white'></div>
    </>
  );
}

export default Home;
