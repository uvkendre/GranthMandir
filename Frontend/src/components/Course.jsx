import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Course() {

  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-gray-100 text-black '>
    <div className=' mt-12 grid grid-cols-1 md:grid-cols-3'>
      {
        book.map((item) =>(
          <Cards key={item.id} item={item}/>
        ))}
    </div>
      </div>
      <div className='flex justify-center align-center text-center  p-4 bg-gray-100'>
      <Link to="/">
    <button className='items-center justify-center text-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-orange-500 duration-200 mt-3'>Back</button>
    </Link>
      </div>
      
    </>
  );
}

export default Course;