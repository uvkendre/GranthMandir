import React from 'react'
import banner from '/Banner.png'
function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 bg-gray-100 text-black mb-0 cursor-custom '>
        <div className='order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
        <h1 className='text-4xl font-bold'><span className='text-orange-500 underline  '>ग्रंथ मंदिर</span> - A Temple of Books and Knowledge!!!
        </h1>
        <p className='text-lg '>At <span className='text-2xl font-bold'>ग्रंथ मंदिर</span>, books are revered as sacred vessels of wisdom and storytelling. Our bookstore is a haven for avid readers, offering a curated selection of literature spanning genres, cultures, and eras. From timeless classics to contemporary gems, each book in our collection is carefully chosen to inspire, educate, and entertain. Rooted in the belief that knowledge is divine, Granth Mandir is more than just a bookstore—it's a sanctuary where readers can explore new worlds, gain insights, and enrich their lives through the magic of books.</p>
        </div>
    </div>
        <div className='order-1 w-full md:w-1/2'>
        <img className='rounded-full my-[50px] mx-20 hover:scale-105 duration-200 hover:shadow-2xl hover:shadow-black hover:text-gray-950  bg-gray-100' src= {banner} alt="" />
        </div>
    </div>
    </>
  )
};

export default Banner;