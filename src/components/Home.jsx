import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Footer from './Footer/Footer';
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
        <div className=' w-full h-full bg-slate-100 flex gap-6 justify-center items-center'>
          <div className='flex flex-col gap-4 items-start justify-center w-full h-full px-40'>
            <h1 className='text-7xl font-bold text-black '>Eat.</h1>
            <h1 className='font-normal text-xl'>Breakfast, Lunch and Artisanal Pastries</h1>
            <p className='font-light text-lg'>Experience the joy of dining out at our restaurant, where every meal is a culinary delight. Our menu features a tantalizing selection of dishes crafted with care and expertise, using only the freshest ingredients. Whether you're craving a hearty meal or a light bite, our menu has something for everyone. Sit back, relax, and enjoy the warm and inviting ambiance as our friendly staff takes care of you. </p>
            <button className='py-4 px-5 border-[1px] border-black  hover:bg-[#60695D] hover:border-none hover:text-white transition-all ease-linear'>See More</button>
          </div>


        </div>
        <div className=' w-full h-full bg-[url("https://static.wixstatic.com/media/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg/v1/fill/w_953,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_b12138462b31409aaf8029cf7a2dd7ed~mv2.jpg")] bg-no-repeat bg-cover bg-center'>

        </div>
      </div>
      <div className='main3 w-full h-[70vh] flex'>
        <div className=' w-full h-full bg-[url("https://static.wixstatic.com/media/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg/v1/fill/w_950,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_1c8f21588e024e4aa589012f541f7a3b~mv2.jpg")] bg-no-repeat bg-cover bg-center'>

        </div>
        <div className=' w-full h-full bg-slate-100'>
          <div className='flex flex-col gap-4 items-start justify-center w-full h-full px-40'>
            <h1 className='text-7xl font-bold text-black '>Drink. </h1>
            <h1 className='font-normal text-xl'>The Freshest Cup in Town </h1>
            <p className='font-light text-lg'>
              Savor the rich aroma and exquisite flavor of freshly brewed coffee at our restaurant. Our baristas are dedicated to crafting the perfect cup, using premium beans sourced from around the world. Whether you prefer a classic espresso, a velvety cappuccino, or a refreshing iced latte, we have a wide range of coffee options to suit every taste.  </p>
            <button className='py-4 px-5 border-[1px] border-black  hover:bg-[#60695D] hover:border-none hover:text-white transition-all ease-linear'>See More</button>
          </div>

        </div>

      </div>
      <div className='main2 w-full h-[70vh] flex'>
        <div className=' w-full h-full bg-slate-100'>
          <div className='flex flex-col gap-4 items-start justify-center w-full h-full px-40'>
            <h1 className='text-7xl font-bold text-black '>Enjoy. </h1>
            <h1 className='font-normal text-xl'>Make Yourself at Home </h1>
            <p className='font-light text-lg'>
              At our restaurant, we believe in more than just great food and drinks - we believe in creating an experience that allows you to truly enjoy yourself. From the moment you step through our doors, our goal is to transport you to a place where you can relax, unwind, and savor every moment.   </p>
            <button className='py-4 px-5 border-[1px] border-black  hover:bg-[#60695D] hover:border-none hover:text-white transition-all ease-linear'>See More</button>
          </div>

        </div>
        <div className=' w-full h-full bg-[url("https://static.wixstatic.com/media/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg/v1/fill/w_953,h_590,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_5d9b5804b420484aa112d37fa3ce3f45~mv2.jpg")] bg-no-repeat bg-cover bg-center'>

        </div>
      </div>

      <div className='w-full h-[40vh] bg-[#FBF2E8] flex flex-col gap-28 justify-center items-center'>
        <h1 className='text-6xl font-bold text-center'>Drop By for a Bite.</h1>
        <div className='flex gap-24 w-1/2 justify-between'>
          <div className='Address'>
            <h1 className='text-start font-semibold text-3xl'>Address</h1>
            <h1 className='mt-6'>

              500 Terry Francine St.</h1>

              <h1>San Francisco, CA 94158</h1>
          </div>
          <div className='Address'>
            <h1 className='text-start font-semibold text-3xl'>Opening Hours</h1>
            <h1 className='mt-6'>Mon - Fri: 9am - 6pm</h1>
            <h1>Saturday: 10am - 2pm</h1>
            <h1>​Sunday: Closed</h1>
          </div>

        </div>

      </div>

      <div>
        <Footer/>
      </div>

    </>
  );
}

export default Home;
