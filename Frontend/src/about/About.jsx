import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';



function about() {
  return (
    <>
            <Navbar />
            <div className="bg-gray-100 mt-[65px] p-10 text-black  ">
                <h1 className="text-4xl underline font-bold text-center mb-6 ">About Us</h1>
                <p className="text-xl">
                    Welcome to Granth Mandir, your one-stop destination for all things books!
                    Founded with a passion for literature and a deep commitment to knowledge,
                    Granth Mandir is more than just a bookstore – it's a sanctuary for readers
                    and learners alike.
                </p>
                <br />
                <p className="text-xl">
                    At Granth Mandir, we believe that books have the power to transform lives,
                    broaden horizons, and inspire minds. Whether you're a casual reader, an
                    academic scholar, or someone in search of inspiration, our carefully
                    curated collection caters to all tastes and interests. From timeless
                    classics to the latest bestsellers, academic textbooks to regional
                    literature, we offer a wide variety of genres to quench your literary
                    thirst.
        </p>
                <br />
                <p className="text-xl">
                    Our mission is simple: to create a community of readers who cherish the
                    joy of reading and sharing knowledge. We are deeply rooted in Indian
                    culture and are proud to offer a diverse selection of Marathi, Hindi, and
                    English books that reflect our heritage and the vibrant voices of Indian
                    authors.
        </p>
        <br />
                <p className="text-xl">
                    At Granth Mandir, it's not just about selling books – it's about fostering
                    a love for reading, promoting lifelong learning, and bringing people
                    together through the power of stories.
        </p>
        <br />

                <p className="text-xl">
                    So come, explore our shelves, discover new worlds, and let us help you
                    find your next great read!
                </p>
            </div>
            <Footer />
        </>
      
  )
};


export default about;
