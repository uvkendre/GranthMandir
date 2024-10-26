import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

function Freebook() {
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null); // Add error state to handle potential errors

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book", { timeout: 5000 });
        setBook(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log("Error:", error.message);
        setError("Failed to fetch books. Please try again later.");
      }
    };
    getBook();
  }, []);

  const filterData = book.filter((data) => data.category === "Free"); // Filtering based on state, not `list.json`
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-gray-100 text-black'>
      <div>
        {error && <p className="text-red-500">{error}</p>} {/* Display error if any */}
      </div>
      <div>
        <Slider {...settings}>
          {filterData.length > 0 ? (
            filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))
          ) : (
            <div className="flex justify-center items-center h-64">
              <p>No free books available at this time.</p>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
