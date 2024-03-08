import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
function Home() {
  return (
    <>
      <div className='main w-full h-[93vh] bg-[url("https://static.wixstatic.com/media/c837a6_3072f98b6961440ca0c47ce752c6d052~mv2.jpg/v1/fill/w_1903,h_713,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_3072f98b6961440ca0c47ce752c6d052~mv2.jpg")] *: bg-no-repeat bg-cover bg-center flex justify-center items-center'>

        <div className='text  text-white  w-full h-screen pl-9 flex justify-between items-center'>
          <div className='w-[50%] h-[50%] flex justify-center gap-10 flex-col'>
            <h1 className=" text-xl font-normal">Cafe & Restaurant Est. 2035</h1>
            <h1 className=" text-7xl font-semibold">Your Go-to Spot for Delicious Eats & Coffee</h1>
            <div className='btn flex gap-10 items-center mt-10'>
              <button className='p-4 border-2 border-white hover:bg-[#60695D]'>Order online</button>
              <button className='p-4 border-2 border-white hover:bg-[#60695D]'>Our Menu</button>
            </div>
          </div>
          <div className='w-[50%] h-[50%]'>

          </div>
        </div>
      </div>
      <div className='strip w-full h-[70px] flex items-center justify-center bg-[#60695D]'>
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          interval={3000}
          transitionTime={1000}
          swipeScrollTolerance={50}
        >
          <div className='text text-white text-lg font-light'> Weekend Brunch     I    Saturday 9am - 2pm </div>
          <div className='text text-white text-lg font-light'> Daily Deal    |   Coffee & Pastry $3.99 </div>
        </Carousel>
      </div>
      <div className='main2 w-full h-[70vh] flex'>
        <div className=' w-full h-full bg-slate-100'>

        </div>
        <div className=' w-full h-full bg-[url("https://static.wixstatic.com/media/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg/v1/fill/w_953,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg")] bg-no-repeat bg-cover bg-center'>

        </div>
      </div>
      <div className='main3 w-full h-[70vh] flex'>
        <div className=' w-full h-full bg-[url("https://static.wixstatic.com/media/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg/v1/fill/w_950,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg")] bg-no-repeat bg-cover bg-center'>

        </div>
        <div className=' w-full h-full bg-slate-100'>

        </div>

      </div>
      <div className='main2 w-full h-[70vh] flex'>
        <div className=' w-full h-full bg-slate-100'>

        </div>
        <div className=' w-full h-full bg-[url("https://static.wixstatic.com/media/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg/v1/fill/w_953,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg")] bg-no-repeat bg-cover bg-center'>

        </div>
      </div>
      
    </>
  );
}

export default Home;
