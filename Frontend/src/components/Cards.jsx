import React from 'react'

function Cards({ item }) {
  return (
    <>
      <div className='bg-gradient-to- from-[#d7b466] to-[#d77b2b] p-5'>
      <div className=''>
      <div className='mt5 my-5 ' >
    <div className="card w-96 shadow-black hover:scale-105 duration-200 dark:bg-slate-900 bg-white text-black">
  <figure>
    <img
      src= {item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="cursor-pointer p-2 rounded-full border-[2px] hover:bg-orange-500  hover:text-white duration-200">₹{item.price}</div>
      <div className="cursor-pointer p-2 rounded-full border-[2px] hover:bg-orange-500 hover:text-white duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </div>
      </div>
    </>
  );


  
}

export default Cards;