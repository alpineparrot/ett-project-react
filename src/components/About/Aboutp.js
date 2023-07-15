import React from 'react'
import './aboutStyles.css'
import { AiOutlineSearch } from 'react-icons/ai'
// import { GetImages } from '../../components/GetImages'
import pontneuf from "../../assets2/pontneuf.png";
// import Video from '../../assets/maldivesVideo.mp4'
// import { useState, useEffect } from "react";
// import Article from "./Article";

function Aboutp() {
    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //   const fetchImages = async () => {
    //     const response = await fetch(
    //       `https://api.unsplash.com/search/photos?query=europe&client_id=lHmKWjeagwQJtw7rwb7DkhkzvNYy81QoAY42RkoYgSQ`
    //     );
    //     const data = await response.json();
    //     console.log(data);
    //     setImages(data);
    //   };

    //   fetchImages();
    // }, []);


    return (
      <>
        <div className="hero">
          <img src={pontneuf} alt="pontneuf" id="video" />
          <div className="overlay"></div>
          <div className="content">
            <h1 className="text-4xl text-center">
              Experience your travel in ETT
            </h1>
            <h2 className='text-2xl'>SEARCH YOUR PLACE YOU'VE BEEN</h2>
            {/* <GetImages /> */}
            <form className="form">
              <div>
                <input
                  className="text-2xl"
                  type="text"
                  placeholder="Search Destinations"
                />
              </div>
              <div>
                <button className="py-3 px-6 sm:w-[60%] my-4">
                  Search
                  {/* <AiOutlineSearch size={30} className="icon" /> */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
      //     {/* <div className="container mx-auto px-5 2xl:px-0">
      //       <h1 className="text-slate-800 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14">
      //         Recommended For You
      //       </h1>

      //       {!images ? (
      //         <div>
      //           <h1>Loading...</h1>
      //         </div>
      //       ) : (
      //         <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg:container">
      //           {images.map((image) => (
      //             <Article key={image.id} {...image} />
      //           ))}
      //         </section>
      //       )}
      //     </div>

      // </> */}
    );
}

export default Aboutp;
